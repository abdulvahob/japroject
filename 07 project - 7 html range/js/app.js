
let value  = document.querySelector("#rangeValue")
let input  = document.querySelector("input")

input.addEventListener('mousemove' , function(){
   value.innerHTML = input.value
})