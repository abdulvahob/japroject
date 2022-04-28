let a = document.querySelector(".slide-2")

window.addEventListener('mousemove', function(e){
   let x = e.clientX;
   a.style.left = x +"px"
})