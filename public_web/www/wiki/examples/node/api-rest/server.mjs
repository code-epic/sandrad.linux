
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import pino from 'pino';

const app = express();
const log = pino();
app.use(helmet());
app.use(cors());
app.use(express.json());

// versioning
const v1 = express.Router();
v1.get('/health', (req,res)=>res.json({ok:true, ts: Date.now()}));

// Example resource
const users = new Map();
v1.get('/users', (req,res)=>res.json([...users.values()]));
v1.post('/users', (req,res)=>{
  const id = crypto.randomUUID();
  const u = { id, ...req.body };
  users.set(id, u);
  res.status(201).json(u);
});

app.use('/v1', v1);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>log.info({msg:'API up', port:PORT}));
