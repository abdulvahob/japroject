let a = document.querySelector(".slide-2")

window.addEventListener('mousemove', function(e){
   console.log('salom');
   let x = e.clientX;
   a.style.left = x +"px"
})