const showPopupBtn = document.querySelector(".btnlogin");
const hidePopupBtn = document.querySelector(".formlogin .closebtn");

showPopupBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("show-popup");
});

hidePopupBtn.addEventListener("click", ()=>showPopupBtn.click());