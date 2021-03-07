const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors')
const path = require('path');
const app = express();
const PORT = 3000;


// Configurar SMTP e Porta de acordo com o Servidor do Email que utilizar
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'email@gmail.com',
    pass: '123456' //Aqui se deve usar variáveis de ambiente
  }
})

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.post('/envio', (req, res) => {
  const {nome, email, subject, textarea} = req.body;

  transporter.sendMail({
    from: 'email@gmail.com',
    to: email,
    replyTo: email,
    subject: subject,
    text: textarea
  }).then(msg => {
    res.send(msg)
  }).catch(erro => {
    res.send(erro)
  })

  
})

app.listen(PORT, () => {
  console.log('Servidor online');
})