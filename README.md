# Formulário em HTML 5 com Backend desenvolvido em NodeJS + Express

### Explicação

* Foi criado um servidor em NodeJS utilizando o Framework Express.
* Ele executa na URL http://localhost:3000/.
* Quando acessamos essa URL por baixo dos panos enviamos uma Requisição do tipo GET.
* O Servidor por sua vez, quando batemos na Rota principal nos retorna um arquivo HTML.
* Para que possamos acessar via JavaScript esse servidor é necessário utilizar o Middleware CORS.
* Quando preenchemos todos os campos e clicamos em 'Enviar' é disparado uma função que utiliza o Axios para bater na rota desejada e enviando os dados do formulário.



### Dependências

* Framework Express de NodeJS - npm install express
* CORS - Cross-Origin Resource Sharing - npm install cors
* Nodemon - npm install --save-dev nodemon