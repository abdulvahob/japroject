
let openBtn = document.querySelector('.open-btn')
let modal = document.querySelector('.modal')
let closeX = document.querySelector('.closex')
let close = document.querySelector('.close')

openBtn.addEventListener('click' , function(){
   modal.classList.add('show')
})

closeX.addEventListener('click' , function(){
   modal.classList.remove('show')
})

close.addEventListener('click' , function(){
   modal.classList.remove('show')
})