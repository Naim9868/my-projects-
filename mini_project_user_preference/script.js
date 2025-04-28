
//access element...
const resetBtn = document.querySelector("#reset");
const BgColor = document.querySelector("#bg-color");
const FontSize = document.querySelector("input");
const Para = document.querySelector("main");

//set initial value...
const initialValue = ()=>{
    let font = localStorage.getItem("fontSize");
    let bg = localStorage.getItem("bgColor");

    if(font && bg){
        FontSize.value = font;
        BgColor.value = bg;
        Para.style.fontSize = font +"px";
        Para.style.backgroundColor = bg;
    }else if(!font && bg){
        BgColor.value = bg;
        Para.style.backgroundColor = bg;
    }else if(font && !bg){
        FontSize.value = font;
        Para.style.fontSize = font +"px";
    }else{
        Para.style.fontSize = 15 + "px";
        Para.style.backgroundColor = "aqua";
    }
}
//get value from input field...
const getFontSize = (e)=>{
    let Value = e.target.value;
    Para.style.fontSize = Value + "px";
    localStorage.setItem("fontSize", Value);

}
const getBgColor = (e)=>{
    let Value = e.target.value;
    Para.style.backgroundColor = Value;
    localStorage.setItem("bgColor", Value);
    
}
const reset = ()=>{
    
    localStorage.clear();
    FontSize.value = 15;
    BgColor.value = "aqua";
    Para.style.fontSize = FontSize.value + "px";
    Para.style.backgroundColor = BgColor.value;
    console.log(FontSize,BgColor);
}
//adding event listener..
FontSize.addEventListener("change", getFontSize);
BgColor.addEventListener("change", getBgColor);
resetBtn.addEventListener("click", reset);

initialValue();