let btns = document.querySelectorAll('button');
let item = document.querySelectorAll('.item');

btns.forEach((btn , index) => {
   btn.addEventListener('click' , function(){
      item[index].style.display = 'none'
   })
});