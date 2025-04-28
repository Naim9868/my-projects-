document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const taskCount = document.getElementById('task-count');
    const clearCompletedBtn = document.getElementById('clear-completed');
    
    let tasks = [];
    let currentFilter = 'all';
    let dragStartIndex;
    
    // Initialize the app
    function init() {
        loadTasks();
        renderTasks();
        updateTaskCount();
        
        // Set up event listeners
        addTaskBtn.addEventListener('click', addTask);
        taskInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') addTask();
        });
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentFilter = this.dataset.filter;
                renderTasks();
            });
        });
        
        clearCompletedBtn.addEventListener('click', clearCompletedTasks);
        
        // Make tasks draggable
        taskList.addEventListener('dragstart', dragStart);
        taskList.addEventListener('dragover', dragOver);
        taskList.addEventListener('dragleave', dragLeave);
        taskList.addEventListener('dragend', dragEnd);
        taskList.addEventListener('drop', drop);
    }
    
    // Load tasks from localStorage
    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            tasks = JSON.parse(savedTasks);
        }
    }
    
    // Save tasks to localStorage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    // Add a new task
    function addTask() {
        const text = taskInput.value.trim();
        if (text) {
            const newTask = {
                id: Date.now(),
                text,
                completed: false
            };
            
            tasks.push(newTask);
            saveTasks();
            renderTasks();
            updateTaskCount();
            taskInput.value = '';
        }
    }
    
    // Render tasks based on current filter
    function renderTasks() {
        taskList.innerHTML = '';
        
        let filteredTasks = tasks;
        if (currentFilter === 'active') {
            filteredTasks = tasks.filter(task => !task.completed);
        } else if (currentFilter === 'completed') {
            filteredTasks = tasks.filter(task => task.completed);
        }
        
        if (filteredTasks.length === 0) {
            taskList.innerHTML = '<p style="text-align: center; color: #666;">No tasks found</p>';
            return;
        }
        
        filteredTasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;
            taskItem.draggable = true;
            taskItem.dataset.index = index;
            
            taskItem.innerHTML = `
                <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
                <span class="task-text">${task.text}</span>
                <input type="text" class="edit-input" value="${task.text}">
                <div class="task-actions">
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;
            
            taskList.appendChild(taskItem);
            
            // Add event listeners to the new elements
            const checkbox = taskItem.querySelector('.task-checkbox');
            const taskText = taskItem.querySelector('.task-text');
            const editInput = taskItem.querySelector('.edit-input');
            const editBtn = taskItem.querySelector('.edit-btn');
            const deleteBtn = taskItem.querySelector('.delete-btn');
            
            checkbox.addEventListener('change', function() {
                task.completed = this.checked;
                taskItem.classList.toggle('completed', this.checked);
                saveTasks();
                updateTaskCount();
                
                // If we're filtering and the task status changes, re-render
                if (currentFilter !== 'all') {
                    renderTasks();
                }
            });
            
            taskText.addEventListener('dblclick', function() {
                startEditing(taskItem, task);
            });
            
            editBtn.addEventListener('click', function() {
                startEditing(taskItem, task);
            });
            
            deleteBtn.addEventListener('click', function() {
                tasks = tasks.filter(t => t.id !== task.id);
                saveTasks();
                renderTasks();
                updateTaskCount();
            });
            
            editInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    finishEditing(taskItem, task);
                }
            });
            
            editInput.addEventListener('blur', function() {
                finishEditing(taskItem, task);
            });
        });
    }
    
    // Start editing a task
    function startEditing(taskItem, task) {
        const taskText = taskItem.querySelector('.task-text');
        const editInput = taskItem.querySelector('.edit-input');
        
        taskText.style.display = 'none';
        editInput.style.display = 'block';
        editInput.focus();
        editInput.select();
    }
    
    // Finish editing a task
    function finishEditing(taskItem, task) {
        const taskText = taskItem.querySelector('.task-text');
        const editInput = taskItem.querySelector('.edit-input');
        const newText = editInput.value.trim();
        
        if (newText) {
            task.text = newText;
            taskText.textContent = newText;
            saveTasks();
        }
        
        taskText.style.display = 'block';
        editInput.style.display = 'none';
    }
    
    // Update the task count
    function updateTaskCount() {
        const remainingTasks = tasks.filter(task => !task.completed).length;
        taskCount.textContent = remainingTasks;
    }
    
    // Clear completed tasks
    function clearCompletedTasks() {
        tasks = tasks.filter(task => !task.completed);
        saveTasks();
        renderTasks();
        updateTaskCount();
    }
    
    // Drag and drop functionality
    function dragStart(e) {
        if (!e.target.classList.contains('task-item')) return;
        dragStartIndex = +e.target.dataset.index;
        e.target.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', e.target.innerHTML);
    }
    
    function dragOver(e) {
        e.preventDefault();
        const taskItem = e.target.closest('.task-item');
        if (!taskItem) return;
        
        const dragOverIndex = +taskItem.dataset.index;
        if (dragStartIndex === dragOverIndex) return;
        
        const afterElement = getDragAfterElement(taskList, e.clientY);
        const draggingItem = document.querySelector('.dragging');
        
        if (afterElement == null) {
            taskList.appendChild(draggingItem);
        } else {
            taskList.insertBefore(draggingItem, afterElement);
        }
    }
    
    function dragLeave(e) {
        // Optional: Add visual feedback when leaving
    }
    
    function dragEnd(e) {
        const taskItem = e.target.closest('.task-item');
        if (!taskItem) return;
        taskItem.classList.remove('dragging');
        
        // Update tasks array based on new order
        const newTasks = [];
        const taskItems = document.querySelectorAll('.task-item');
        taskItems.forEach(item => {
            const originalIndex = +item.dataset.index;
            newTasks.push(tasks[originalIndex]);
        });
        
        tasks = newTasks;
        saveTasks();
        
        // Re-render to update dataset.index values
        renderTasks();
    }
    
    function drop(e) {
        e.preventDefault();
    }
    
    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.task-item:not(.dragging)')];
        
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
    
    // Initialize the app
    init();
});