let tops = document.querySelector('.top')

window.addEventListener('scroll' , function(e){
   tops.style.transform = `rotate(${+window.pageYOffset + "deg"})`
})