
let container = document.querySelector(".container")

for(let i = 0; i<30 ; i++){
   let div  = document.createElement('div')
   div.classList.add('show')
   container.append(div)
}
let show = document.querySelectorAll('.show')

setInterval(() => {
   for(i =0 ; i<= show.length ; i++){
      show[i].style.left = Math.floor(Math.random()*90) + "vw";
      show[i].style.top = Math.floor(Math.random()*80) + "vh";
   }
}, 1000);