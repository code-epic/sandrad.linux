
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const SECRET = process.env.JWT_SECRET || 'change-me';
const users = new Map();

const app = express();
app.use(express.json());

app.post('/register', async (req,res)=>{
  const {email,password,role='user'} = req.body;
  const hash = await bcrypt.hash(password, 10);
  users.set(email, {email,hash,role});
  res.status(201).json({email,role});
});

app.post('/login', async (req,res)=>{
  const {email,password} = req.body;
  const u = users.get(email);
  if (!u || !(await bcrypt.compare(password, u.hash))) return res.status(401).json({error:'invalid'});
  const token = jwt.sign({sub:email,role:u.role}, SECRET, {expiresIn:'15m'});
  const refresh = jwt.sign({sub:email,typ:'refresh'}, SECRET, {expiresIn:'7d'});
  res.json({token, refresh});
});

function auth(roles=[]){
  return (req,res,next)=>{
    const h = req.headers.authorization||'';
    const t = h.startsWith('Bearer ') ? h.slice(7) : null;
    try{
      const payload = jwt.verify(t, SECRET);
      if (roles.length && !roles.includes(payload.role)) return res.status(403).json({error:'forbidden'});
      req.user = payload; next();
    }catch{ res.status(401).json({error:'unauthorized'}) }
  }
}
app.get('/admin', auth(['admin']), (req,res)=>res.json({ok:true, who:req.user}));
app.listen(3001, ()=>console.log('Auth demo on :3001'));
