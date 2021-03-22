function UserClicked(input) {
 var s= document.getElementById("result").value += input;
 document.getElementById("result").value = s;
 console.log(s);
}
function ClearData() {
  document.getElementById("result").value = "";
}
function Calculation(){
  var node = document.createElement("LI");
  var expression = document.getElementById("result").value;
  var result = eval(expression);
  var history = expression + "     =      " + result;
  var textnode = document.createTextNode(history);
  node.appendChild(textnode);
  document.getElementById("history_log").appendChild(node);
  document.getElementById("result").value = result;
}
function myFunction() {
  document.onmouseup = getText;
}
function getText(e) {
  var t = '';
    t = document.getSelection();
   document.getElementById("result").value = t;
}
