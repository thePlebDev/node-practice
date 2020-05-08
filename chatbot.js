var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;
var port = 3001;
var ws = new WebSocketServer({
  port:port
});


ws.on('connect', function() {
  ws.send('something');
});
