var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;
var port = 3001;
var ws = new WebSocketServer({
  port:port
});
var messages = []
console.log('WebSocket server started')

ws.on('connection', function(socket){
  console.log('client connected')



  socket.on('message',function(data){
    if(data === 'swordfish'){

      messages.forEach(function (msg){
        socket.send(msg);
      })
    }else{
    console.log('message recieved: ' + data);
    messages.push(data);
    ws.clients.forEach(function (clientSocket){
      for( let i = 0; i<2; i++){
          clientSocket.send(data)
        }
    })
  }
  });
});
