let tops = document.querySelector('.top')

window.addEventListener('scroll' , function(){
   tops.style.transform = `rotate(${+window.pageYOffset + "deg"})`
})