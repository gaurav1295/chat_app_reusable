var express = require('express');

  var app=express();
  app.use(express.static('public'));

  var server=app.listen('3000',connMessage);

  function connMessage(){
    console.log('connection established with server');
    }

  var io= require('socket.io')(server);

  io.sockets.on('connection',conndo);


  function conndo(socket){
    console.log('hello you just connected to server and your id is :: '+socket.id);

    socket.on('mouse',function(data){
      console.log('data recieved :: '+data);

      socket.broadcast.emit('mouse',data);

    });

    socket.on('disconnect',function(){
      console.log(socket.id + ' :: is disconnected ');

    });


  }
