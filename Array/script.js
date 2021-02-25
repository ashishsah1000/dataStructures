var m = document.querySelector(".m-container");
var a =[1,2,3,4,5,6]
var col =["orange","red","blue","dodgerblue","green","violet","yellow","black","brown","orangered"]
function DisplayElement(){
  for(var i=0;i<a.length;i++){
    appendInMain(createElement(a[i]),1)
    console.log(a[i])
  }
}
function createElement(x){
  var y = document.createElement("DIV")
  y.innerHTML = x
  y.style.background = col[parseInt(Math.random()*10)]
  return y
}
function appendInMain(x,y){
  if(y==0){
    m.insertBefore(x,m.childNodes[0])
  }
  if(y==1){
    m.appendChild(x)
  }
}
function deleteInMain(y){
  if(y==0){
    m.childNodes[0].remove()
    console.log(a)
  }
  if(y==1){
    var t = m.childNodes.length-1
    m.childNodes[t].remove()
  }
}

function popFirst(){
  a.shift()
  deleteInMain(0)
  console.log(a);   // error not working on the first click
}
function popBack(){
  a.pop()
  deleteInMain(1)
  console.log(a);
} 
function insertFirst(){
  var x= parseInt(Math.random()*100)
  a.unshift(x)
  appendInMain(createElement(x),0);
  console.log(a);
}
function insertBack(){
  var x= parseInt(Math.random()*100)
  a.push(x)
  appendInMain(createElement(x),1);
  console.log(a);
}













