const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 3000;

const path = require('path');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.post('/envio', (req, res) => {
  const {nome, email, subject, textarea} = req.body;
  res.send('Formulário enviado com sucesso!')
})

app.listen(PORT, () => {
  console.log('Servidor online');
})