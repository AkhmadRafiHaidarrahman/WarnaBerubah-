const body = document.body
let Random = document.querySelector("#RdmColor")
let test = document.getElementById("test1")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let slider = document.querySelectorAll(".slider")



console.log(slider)


btn1.addEventListener("click",color)
btn2.addEventListener("click",function(){
    let randomize1 = Math.floor(Math.random() * 255 + 1)
    let randomize2 = Math.floor(Math.random() * 255 + 1)
    let randomize3 = Math.floor(Math.random() * 255 + 1)
    Random.style.backgroundColor = `rgb(${randomize1},${randomize2},${randomize3})`
})    
console.log(body)
    let randomize1;
    let randomize2;
    let randomize3;
function color(){
    randomize1 = Math.floor(Math.random() * 255 + 1)
    randomize2 = Math.floor(Math.random() * 255 + 1)
    randomize3 = Math.floor(Math.random() * 255 + 1)
    Random.style.backgroundColor = `rgb(${randomize1},${randomize2},${randomize3})`
}
color()
console.log(color)

slider[0].addEventListener("change",function(){
    let r = slider[0].value
  Random.style.backgroundColor = `rgb(${r},100,100)`  
})
slider[1].addEventListener("change",function(){
    let g = slider[1].value
  Random.style.backgroundColor = `rgb(100,${g},100)`  
})
slider[2].addEventListener("change",function(){
    let b = slider[2].value
  Random.style.backgroundColor = `rgb(100,100,${b})`  
})

document.addEventListener('mousemove',function(event){
    let y = Math.round(event.clientY / window.innerWidth * 255)
    let x = Math.round(event.clientX / window.innerWidth * 255)
    console.log(`Mouse position relative to screen: y = ${y}, x = ${x}`);
    Random.style.backgroundColor = `rgb(${y},${x},${randomize1})`
    console.log(window.innerWidth)
    console.log(x)
})
