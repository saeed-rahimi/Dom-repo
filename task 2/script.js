const input=document.querySelector(".enter");
const btn=document.querySelector(".btn");
const texBox=document.querySelector(".text")
btn.addEventListener("click",function() {
    if (input.value==="") {
        texBox.style.border="1px red solid";
         texBox.style.backgroundColor="red";
         texBox.textContent="input is Empty"; 
    } else {
        texBox.style.border="";
        texBox.style.backgroundColor="aquamarine";
        texBox.textContent=input.value;
    }
})