// var num="30"; var num2=20;
// var num1=parseInt(num);
// console.log(num1);
// console.log(typeof(num1));
// console.log(num1 + num2);

// console.log("");
// var num3 = 35;
// var num4 = num3.toString();
// console.log(num4);
// console.log(typeof(num4));

// console.log("");
// var num5  = "39.345667"; 
// console.log(typeof(num5));
// var num6  = parseInt(num5);
// console.log(num6);
// var num7 = parseFloat(num5);
// console.log(typeof(num7));
// console.log(num7);

// console.log("");
// console.log(num7.toFixed());
// console.log(typeof(Number(num7.toFixed(3))));
// console.log(typeof(num7.toPrecision(3)));

// console.log("");
// var num8 = Number(num5);
// console.log(num8);
// console.log(typeof(num8));

// console.log("");
// // num9 = Number(num8.toFixed(4)) + Number(num8.toPrecision(4));
// var num9 = parseInt(num8.toFixed(3)) + parseFloat(num8.toFixed(2));
// console.log(num9);
// console.log("");
// console.log("Library function for String");
// /* string.length
// prompt(); input নেওয়ার জন্য ব্যাবহার করা হয়।
// string.charAt(); কোন string এর নির্দিষ্ট কোন value কে acces করতে এই function ব্যাবহার করা হয়;
// string.toupperCase(); convert to uppercase;
// string.toLowerCase(); convert to lowercase;
// string.concat(string); দুইটি string যোগ করতে ব্যাবহার করা হয়;
// string.slice(start, end); কোন string এর start index থেকে end index পর্যন্ত কেটে নেবে;
// */
// var text = "Bangladesh";
// var text1 = "Pakisthan";
// console.log(text.length);
// console.log(text.charAt(9)); //according to index.
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());
// console.log(text.concat(" "+text1));
// console.log(text.slice(0,6));

// // var firstName = prompt("Enter Your First Name: ");
// // var lastName = prompt("Enter Your Last Name: ");
// // var fullName = firstName + " " + lastName;
// // console.log(fullName);
// // console.log("the length of full name: " + fullName.length);
// // console.log(fullName.toUpperCase());
// // console.log(fullName.toLocaleLowerCase());
// // console.log(fullName.charAt(1));

// console.log("");
// console.log("Arithmatic and Assignment operator");
// /*   +,-, *,/,%(modulus),**(exponent or power),
//      ++(increment),--(decrement);*/
// var a = 5;
// console.log(a++);
// console.log(a);
// console.log(a--);
// console.log(++a);
// console.log(--a);

// console.log("");
// console.log("Assignment Operator:");
// // =. +=, -=, *=, /=, %=, **=;
// var b = 4;
// console.log(b+=3);
// console.log(b-=2);
// console.log(b*=3);
// console.log(b/=3);
// console.log(b**=3);
// console.log(b%=7);

// console.log(" ");
// console.log("make your own calculator: ");
// // var x=Number(prompt("enter number_1: "));
// // //var x=Number(X);
// // var y=Number(prompt("enter number_2: "));
// // //var y=Number(Y);
// // console.log(typeof(y));
// // console.log(y);
// // document.write("sum = "+ (x+y)+ "<br/>");
// // document.write("subtraction = "+ (x-y) + "<br/>");
// // document.write("multiplication = "+(x*y)+"<br/>");
// // document.write("division = "+(x/y)+ "<br/>");
// // document.write("modulus = "+(x%y)+"<br/>");
// // document.write("exponential = "+(x**y)+"<br/>");
// // document.write(++x +"<br/>");
// // document.write(--y);

// console.log("");
// console.log("area of various shape: ");
// // var base = Number(prompt("Base: "));
// // var height  = Number(prompt("Heingt: "));
// // var area = base*height;
// // console.log(area);

// console.log("");
// console.log("temparature converter: c to f");
// // var cel = Number(prompt("enter celcious temparature: "));
// // var far;
// // far =((9/5)*cel)+32;
// // cel = (5.001/9)*(far-32);

// // console.log(far);
// // console.log(cel); 

// console.log("");
// console.log("Relational Operator: ");
// //<,>,<=,>=, ==, ===, !=,!==, 
// console.log("Logical operator: ");
// // &&, ||, ! returns true or false;

// console.log(20==20);
// console.log(30=="30");
// console.log(30==="30");
// console.log(!true);
// console.log(true||false);
// console.log(true&&false);

// console.log(20!=="20");
// console.log("modified");

// console.log("hello world");
// console.log("hi");

// var button_for_image_1 = document.getElementById("#btn1");
// var button_for_image_2 = document.getElementById("#btn2");
// const forShowingImage = document.getElementById("image");

// function fun1(){
//     console.log("button 1 clicked");
//     forShowingImage.src = "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//     forShowingImage.style.display ="block";
// }
// function fun2(){
//     console.log("button 2 clicked");
//     forShowingImage.src = "rae lil black.jpg";
//     forShowingImage.style.display ="block";
// }

// method 1: 
// const showImageBtn = document.getElementById("showImageBtn");
// const hiddenImage = document.getElementById("hiddenImage");

// showImageBtn.addEventListener("click", () => {
//   if (hiddenImage.style.display === "none") {
//     hiddenImage.style.display = "block";
//     hiddenImage.style.animation = "fadeIn 0.5s ease-in-out"; // Optional animation
//   } else {
//     hiddenImage.style.display = "none";
//     hiddenImage.style.animation = "fadeIn 0.5s ease-in-out";
//   }
// });

//method 2: 

// const changeImageBtn = document.getElementById("changeImageBtn");
// const displayedImage = document.getElementById("displayedImage");

// let isFirstImage = true;

// changeImageBtn.addEventListener("click", () => {
//   if (isFirstImage) {
//     displayedImage.src = "https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//     displayedImage.alt = "New Image";
//     displayedImage.style.display = "block";
//   } else {
//     displayedImage.src = "https://plus.unsplash.com/premium_photo-1664303228186-a61e7dc91597?q=80&w=992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//     displayedImage.alt = "Default Image";
//     displayedImage.style.display = "block";
//   }
//   isFirstImage = !isFirstImage;
// });

//methode 3: Modal Popup Image (Best for Galleries)
// const openModalBtn = document.getElementById("openModalBtn");
// const imageModal = document.getElementById("imageModal");
// const closeModalBtn = document.getElementById("closeModalBtn");

// openModalBtn.addEventListener("click", () => {
//   imageModal.style.display = "flex"; // Show modal
// });

// closeModalBtn.addEventListener("click", () => {
//   imageModal.style.display = "none"; // Hide modal
// });

// // Close modal if clicked outside the image
// imageModal.addEventListener("click", (e) => {
//   if (e.target === imageModal) {
//     imageModal.style.display = "none";
//   }
// });


// const link = document.querySelector("a");

// console.log(link.innerHTML);

// link.style.textDecoration = "none";
// link.style.fontSize = "50px";

// link.href = "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_iframe_target";

// var heading2 = document.createElement("h1");
// var text = document.createTextNode("Hi");
// heading2.appendChild(text);

// var myDiv = document.querySelector("div");
// myDiv.appendChild(heading2);

// var divHeader_1 = document.querySelector("div h1");
// var divHeader_2 = document.querySelector("div h2");
// var divHeader_3 = document.querySelector("div h3");
// myDiv.insertBefore(heading2,divHeader_3);

// console.log(myDiv.classList);

// myDiv.classList.add("class_4");
// console.log(myDiv.classList);

// myDiv.classList.remove("class_1");
// console.log(myDiv.classList);

// myDiv.removeChild(divHeader_3);
// myDiv.replaceChild(divHeader_2,divHeader_1);



//DOM Traversing...
// downwards, upwards, sideways...
// const firstDiv = document.querySelector(".class_1");
// console.log(firstDiv);
// const firstHeader = firstDiv.querySelector("h1");

// const secondDiv = firstDiv.children[3];
// console.log(secondDiv);
// const newElement = document.createElement("p");
// const Txt = document.createTextNode("Naimul Islam");

// newElement.appendChild(Txt);

// secondDiv.appendChild(newElement);

// const FristDiv = secondDiv.parentElement;
// console.log(FristDiv);

// const header3 = secondDiv.previousElementSibling;

// console.log(header3.innerHTML);

// const header2 = secondDiv.previousElementSibling;
// console.log(header2.innerHTML);

// const photos = ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
//     ,"https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     ,"https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     ,"https://plus.unsplash.com/premium_photo-1664303228186-a61e7dc91597?q=80&w=692&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     ,"https://plus.unsplash.com/premium_photo-1664392248318-4e1d9361726e?q=80&w=683&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     ,"https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     ,"https://plus.unsplash.com/premium_photo-1679314213957-909df10381ac?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     ,"https://plus.unsplash.com/premium_photo-1670590785994-ab5e8a2ccd61?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     ,"https://images.unsplash.com/photo-1550686041-366ad85a1355?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     ,"https://images.unsplash.com/photo-1504470695779-75300268aa0e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     ];

// const image = document.querySelector("img");
// let count = 0;
// function next(){
//         count++;
//         if(count > photos.length-1){
//             count = 0;
//             image.src = photos[count];
//         }else{
//             image.src = photos[count];
//         }
    
// }
// function prev(){
//     count--;
//     if(count<0){
//         count = photos.length-1;
//         image.src = photos[count];
//     }else{
//         image.src = photos[count];
//     }
// }


// // Get all elements
// const slides = document.querySelectorAll('.slides img');
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');

// let currentSlide = 0;

// // Show first slide initially
// slides[currentSlide].classList.add("active");

// // Next Slide Function
// function nextSlide() {
//     // Hide current slide
//     slides[currentSlide].classList.remove('active');
    
//     // Move to next slide (loop back to 0 if at end)
//     currentSlide = (currentSlide + 1) % slides.length;
    
//     // Show new slide
//     slides[currentSlide].classList.add('active');
// }

// // Previous Slide Function
// function prevSlide() {
//     // Hide current slide
//     slides[currentSlide].classList.remove('active');
    
//     // Move to previous slide (loop to end if at 0)
//     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    
//     // Show new slide
//     slides[currentSlide].classList.add('active');
// }

// // Button Click Events
// nextBtn.addEventListener('click', nextSlide);
// prevBtn.addEventListener('click', prevSlide);



// how to add and remove Animation in java script...


// const buttons = document.querySelectorAll("button");

// buttons.forEach((btn)=>{
//     btn.addEventListener("click",()=>{
//         const txt = btn.textContent;
//         playAudio(txt);
       
//     })
//     // console.log(txt);
// })
// let dio = null;

// function playAudio(player){
//     if(dio){
//         dio.pause();
//         dio.currentTime = 0;
//     }
//     switch(player){

//         case "▶️ play_1":
//             dio = new Audio("https://soundcloud.com/djactor/2013-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing");
//             break;
//         case "▶️ play_2":
//             dio = new Audio("https://soundcloud.com/ingofisco101/love-me-like-you-do?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing");
//             break;
//         case "▶️ play_3":
//             dio = new Audio("https://soundcloud.com/rjpp2ovwcy3r/pedar-elias-loving-you-girl-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing");
//             break;
//         default: 
//             return;
        
//     }

// }


//          SIGMA WEB DEVELOPMENT COURSE...


//faulty calculator..
// 10% of time give wrong answer...

// let random = Math.random();
// // random = 0.1;
// console.log(random);
// let num_1 = prompt("Enter first number: ");
// let num_2 = prompt("Enter second number: ");

// let operator = prompt("Enter the operation that will be performed: ");

// console.log(num_1,operator,num_2);

// const obj = {
//     "+": "-",
//     "*": "+",
//     "-": "/",
//     "/": "**"
// }
// console.log(obj);

// let wrongOperator =obj[operator];

// if(random>.1){
//     console.log(eval(`${num_1} ${operator} ${num_2}`));
// }else{
//     console.log(eval(`${num_1} ${wrongOperator} ${num_2}`));
// }


/*problem: Create a business name generator by combining list
of adjectives and shop name and another world..

Adjectives: 
Crazy 
Amazing
Fire

Shop Name: 
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

not using array...
*/
// console.log(Math.random(),Math.random(),Math.random());


// var adj = {
//     1:'Crazy',
//     2:'Amazing',
//     3:'Fire'
// }
// var nme = {
//     1:'Engine',
//     2:'Foods',
//     3:'Garments'
// }
// var another = {
//     1:'bros',
//     2:'Limited',
//     3:'Hub'
// }

// ran1 = Math.floor(1 + Math.random() * 3);
// ran2 = Math.floor(1 + Math.random() * 3);
// ran3 = Math.floor(1 + Math.random() * 3);

// console.log(adj[ran1] +" "+ nme[ran2]+" " + another[ran3]);


//Random color generator....
/* Give 5 boxes, Assign a random color and a random background
to each box using DOM concepts..
*/

// let box = document.querySelectorAll(".box");

// function randomColor(){
//     let R = Math.floor(Math.random()*255);
//     let G = Math.floor(Math.random()*255);
//     let B = Math.floor(Math.random()*255);

//     return `rgb(${R},${G},${B})`;
// }
// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
//   }
// console.log(randomColor());
// console.log(getRandomHexColor());
// Array.from(box).forEach((x)=>{
//     x.style.color = randomColor();
//     x.style.backgroundColor = randomColor();
// })

// let num = 0;
// let intervalId = setInterval(()=>{
//     num++;
//     console.log("naim");
//     console.log(num);
//    if(num==10){
//     clearInterval(intervalId);
//    }
// },1000);
// console.log(intervalId);

// console.log("task 1");
// console.log("task 2");
// console.log("task 3");
// setTimeout(()=>{
//     console.log("task 4");
//     console.log("task 5");
//     console.log("task 6");
// },4000);


// const orderFood = new Promise((resolve,reject)=>{
//     const foodReady = true;
//     if(!foodReady){
//         resolve("Food is ready.");
//     }else{
//         reject("Baper hotel a vat nai");
//     }
// })

// orderFood.then(response =>{
//     console.log(response);
// }).catch(err =>{
//     console.log(err);
// })

// const getUsers = new Promise((resolve,reject)=>{
//     const usersAvailable = true;
//     const users = ["Naim", "Manik", "Sabbir","Mobin"];
//     if(usersAvailable){
//         resolve(users);
//     }else{
//         reject("No user data available.");
//     }
// });
// var usr;
// getUsers.then(res =>{
//    console.log(res);
// }).catch(err =>{
//     console.log(err);
// });





// const moneyRequest = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Request Submited");
//     },1000);
// });
// const transferMoney = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Money Transfered.");
//     },5000);
// });
// const payFee = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Fee paid");
//     },3000);
// });

// Promise.all([moneyRequest,transferMoney,payFee])
// .then(response =>{
//     console.log(response);
// }).catch(err =>{
//     console.log(err);
// });

// Promise.race([moneyRequest,transferMoney,payFee])
// .then(res =>{
//     console.log(res);
// });


// let amount = prompt("enter amount: ");
// const payment = new Promise((resolve,reject)=>{
//     if(amount>0){
//         console.log("processing ...");
//         setTimeout(()=>{
//             resolve("Payment conpleted.")
//         },500);
//     }else{
//         reject("enter correct amount.");
//     }
// })

// payment.then(res =>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// });

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(res =>{
//     res.json();
// }).then((data)=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err);
// })

// data fetching...

const url =  'https://jsonplaceholder.typicode.com/posts/1';
// const Url = 'https://jsonplaceholder.typicode.com/posts';

// fetch(url)
// .then(res =>{
//     if(!res.ok){
//         throw new Error(`${res.status}`);
//     }
//     console.log(res);
   
    
//     return res.json();
// })
// .then(data =>{
//     console.log(data[5]);
// })
// .catch(err => console.log(err));

// async function getData(url){
//     const response = await fetch(url); //return readable stream...
//     if(!response){
//         throw new Error(response.status);
//     }
//     const data = await response.json();//return js object..
//     console.log(typeof(response));
//     console.log(data);
//     console.log(typeof(data));
// }
// getData(url);


// const data = async ()=>{
//     try{
//         const data = await fetch('./data.json');
//         if(!data.ok){
//             throw new Error('Data corrupted');
//         }
//         const Data = await data.json();
//         console.log(Data);
//         return Data;
//     }catch(err){
//         console.log(err)
//     }
// }

// data();


// let inp = prompt();

// function isValidEmail(email) {
//     try{
//         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         let isValid = regex.test(email);
//         if(!isValid){
//             throw new Error("Invalid Email Format");
//         }else{
//             return "valid";
//         }
//     }catch(err){
//         return err;
//     }
//   }
  
// console.log(isValidEmail(inp));


// const email = document.getElementById("emil");

// function validEmail(email){
//     try{
//         if(!email.checkValidity()){
//             throw new Error("invalid email");
//         }else{
//             return "valid email";
//         }
//     }catch(err){
//         return err;
//     }
// }
// console.log(validEmail(email));


// async function fetchUser(userId) {
//     try{
//         let url = `https://jsonplaceholder.typicode.com/todos/${userId}`;
//         let data = await fetch(url);
//         let Data = await data.json();
//         if(!data.ok){
//             throw new Error("went something wrong");
//         }
//         console.log(Data);

//     }catch(err){
//         console.log(err);
//     }
//     finally{
//         console.log("Request comple");
//     }
// }
// fetchUser('https://jsonplaceholder.typicode.com/todos/78');
// fetchUser('https://jsonplaceholder.typicode.com/todos/2');
// fetchUser('https://jsonplaceholder.typicode.com/todos/3');
// fetchUser('https://jsonplaceholder.typicode.com/todos/4');
// fetchUser('https://jsonplaceholder.typicode.com/todos/5');
// fetchUser('https://jsonplaceholder.typicode.com/todos/6');

// fetchUser(23);
// fetchUser(45);
// fetchUser(67);


