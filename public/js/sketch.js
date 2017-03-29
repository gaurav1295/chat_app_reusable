var socket;

function setup(){
  socket=io.connect('http://localhost:3000/');
  var msginput=createInput('hello',text);
  msginput.id('msg');
  var sentbutton=createButton('send msg');
  sentbutton.mouseClicked(sendMsg);
  socket.on('mouse',function(data){
    console.log('recieved message :: '+data);
    
  })
}

function draw(){

}


function sendMsg(event){
  msgSent();
  msgToServer();
}

function msgSent(){
var msgdata=document.getElementById('msg').value;
console.log('your message is delivered :::'+ msgdata);
}

function msgToServer(){
  var msgdata=document.getElementById('msg').value;
  socket.emit('mouse',msgdata);

}
