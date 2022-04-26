let a  = document.querySelector('.bg')

window.addEventListener('scroll' , function(e){
   // let y = window.scrollY/5;
   let y = window.pageYOffset;
   a.style.backgroundPositionX = -y + "px";
})