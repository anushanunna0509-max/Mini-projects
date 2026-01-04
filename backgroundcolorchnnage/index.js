var colors=['white','red','blue','orange','pink','cyan','green','purple','violet']
var len=colors.length-1

let spancontrol=document.querySelector('.color')
let buttoncontrol=document.getElementById('btn')

buttoncontrol.addEventListener('click',()=>{
    let index=generaterandom()
    document.body.style.backgroundColor=colors[index]
    spancontrol.innerHTML=colors[index]
})

function generaterandom(){
    return Math.round(Math.random()*len)
}