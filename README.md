# Formulário de envio de email em HTML 5 com Backend desenvolvido em NodeJS + Express + Nodemailer

### Explicação

* Foi criado um servidor em NodeJS utilizando o Framework Express.
* Ele executa na URL http://localhost:3000/.
* Quando acessamos essa URL por baixo dos panos enviamos uma Requisição do tipo GET.
* O Servidor por sua vez, quando batemos na Rota principal nos retorna um arquivo HTML.
* Para que possamos acessar via JavaScript esse servidor é necessário utilizar o Middleware CORS.
* Quando preenchemos todos os campos e clicamos em 'Enviar' é disparado uma função que utiliza o Axios para bater na rota desejada e enviar os dados do formulário.
* O Backend recebendo os dados do formulário, dispara a função sendMail do objeto transporter que enviará os dados do formulário ao nosso email.



### Dependências

* Framework Express - npm install express
* Framework Nodemailer - npm install nodemailer
* CORS - Cross-Origin Resource Sharing - npm install cors
* Nodemon - npm install --save-dev nodemon