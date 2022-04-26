
let a = document.querySelector(".background");

window.addEventListener('mousemove' , function(e){
   let x = e.clientX/5;
   let y = e.clientY/5;

   a.style.backgroundPositionX = -x + "px";
   a.style.backgroundPositionY = -y + "px";

})