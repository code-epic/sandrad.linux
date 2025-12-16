
import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });
wss.on('connection', ws => {
  ws.send(JSON.stringify({ type:'welcome', ts:Date.now() }));
  ws.on('message', msg => {
    // echo with simple channel tag
    wss.clients.forEach(c => c.send(JSON.stringify({ type:'broadcast', msg: msg.toString() })));
  });
});
console.log('WS listening on :8080');
