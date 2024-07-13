// code using express library
import express from "express";
import { WebSocket, WebSocketServer } from "ws";

const app = express();
const httpServer = app.listen(8080, () => {
    console.log((new Date()) + " Server is listening on port 8080");
});

const wss = new WebSocketServer({ server: httpServer });

let userCount = 0;

wss.on('connection', function connection(server) {
    server.on('error', (err) => console.error(err) );
  
    server.on('message', function message(data, isBinary) {
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(data, { binary: isBinary });
        }
      });
    });
  
    console.log("user connected ", ++userCount)
    server.send('Hello! Message From Server!!');
});

// code using http library
// import WebSocket, { WebSocketServer} from "ws";
// import http from "http";

// const server = http.createServer(function(request, response) {
//     console.log((new Date()) + ' Received request for ' + request.url);
//     response.end("hi there");
// })

// const wss = new WebSocketServer({ server });

// wss.on('connection', function connection(ws) {
//     ws.on('error', console.error);

//     ws.on('message', function message(data, isBinary) {
//         wss.clients.forEach(function each(client) {
//             if(client.readyState === WebSocket.OPEN) {
//                 client.send(data, { binary: isBinary });
//             }
//         });
//     });

//     ws.send('Hello! Message From Server!!');
// });

// server.listen(8080, function() {
//     console.log((new Date()) + ' Server is listening on port 8080');
// });