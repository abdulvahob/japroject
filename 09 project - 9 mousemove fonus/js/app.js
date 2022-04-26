
let body  = document.querySelector('body')
body.addEventListener('mousemove' , function(e){
   let x  = e.clientX;
   let y  = e.clientY;
   body.style.backgroundPositionX = x - 350 + "px";
   body.style.backgroundPositionY = y - 350 + "px";
})