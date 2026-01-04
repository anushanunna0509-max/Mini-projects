function display(value){
    document.getElementById('result').value+=value
}
function clearScreen(){
    document.getElementById('result').value=""
}
function Calculator(){
    let q=document.getElementById('result').value
    let p=eval(q)
    document.getElementById('result').value=p
}