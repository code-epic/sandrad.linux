
import express from 'express';
import Ajv from 'ajv';
const ajv = new Ajv();
const app = express();
app.use(express.json());

const schemas = new Map(); // name -> JSON schema
const records = new Map(); // name -> array

app.post('/schema/:name', (req,res)=>{
  const {name} = req.params;
  schemas.set(name, req.body);
  records.set(name, []);
  res.status(201).json({ok:true});
});

app.post('/data/:name', (req,res)=>{
  const {name} = req.params;
  const schema = schemas.get(name);
  if (!schema) return res.status(404).json({error:'schema not found'});
  const validate = ajv.compile(schema);
  if (!validate(req.body)) return res.status(400).json({error:'validation', details: validate.errors});
  const recs = records.get(name);
  recs.push(req.body);
  res.status(201).json(req.body);
});

app.get('/data/:name', (req,res)=>{
  const {name} = req.params;
  res.json(records.get(name) || []);
});

app.listen(3002, ()=>console.log('Dynamic API on :3002'));
