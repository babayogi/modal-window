'use strict'
let btns=document.querySelectorAll(".show-modal");
let modal=document.querySelector(".modal");
let overlay=document.querySelector(".overlay")
let closeModal=document.querySelector(".close-modal")

for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click",function(){
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden")
    })
}

let fun=function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden")
    
}


closeModal.addEventListener("click",fun)

// clicking outside modal also closes the modal
overlay.addEventListener("click",fun)


// closing the modal by pressing esc
document.addEventListener("keydown",function(e){
    let val=e.key;
    console.log(val);
    if(val=="Escape" && !modal.classList.contains("hidden"))
    {
        fun();
    }
})