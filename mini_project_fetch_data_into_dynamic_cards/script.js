

    // const posts = [
    //     {
    //         title: "title 1",
    //         desc: "description 1"
    //     },
    //     {
    //         title: "title 2",
    //         desc: "description 2"
    //     },
    //     {
    //         title: "title",
    //         desc: "description 3"
    //     },
    //     {
    //         title: "title 4",
    //         desc: "description 4"
    //     }
    // ];
//data fetching..
    const posts = async (url)=>{
      try{
        const res = await fetch(url);
        if(!res.ok){
            throw new Error("Somthing went wrong");
        }
        const data = await res.json();
        return data;
        
      }catch(error){
        console.log(error)
      }
    }
    const PostsForCard = ()=>{ 
        posts("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log(response);
            response.forEach((x)=>{
                // console.log(x);
                card(x);
            });
            return response;
        }).catch(err =>{
            return err;
        })

    }
PostsForCard();
    // console.log(posts("https://jsonplaceholder.typicode.com/posts"));
    
    //for making card...
    const card = (posts)=>{
        let container = document.querySelector(".container");
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
             <h1>${posts.title}</h1>
             <p>${posts.body}</p>
        `;
       
        container.appendChild(card);
    }
    //for iterate array..
   
