
const button = document.querySelector("button");



let count = 0;
button.addEventListener("click",()=>{
    count++;
    let Value = document.querySelector("input").value;
  
    console.log(Value);
    let RandomNum = Math.ceil(Math.random()*5);
    console.log(RandomNum);
    if(count<6){
        try{
            if(RandomNum == Value){
              
               let txt = "✅You Guess The right Number and you have Won!"
                showOutput(txt);
                console.log("true");
            }else{
                let txt =  "❌You Guess The wrong Number and you have lost!"
                showOutput(txt);
                console.log("false");
            }
        }catch(err){
            return err;
        }finally{
            document.querySelector("input").value = "";
        }
    }else{
        
        let x = confirm("You want to play again?");
        if(x){
            location.reload();
        }
    }
    
    
});


   


function showOutput(txt){
    let Element = document.createElement("p");
    Element.innerText = txt;
    Element.style.fontSize = "13px";
    let Card = document.querySelector(".card");

    Card.appendChild(Element);
}