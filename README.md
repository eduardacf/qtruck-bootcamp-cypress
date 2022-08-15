<center>

![Logo](https://raw.githubusercontent.com/eduardacf/qtruck-bootcamp-cypress/master/img/logo.png)

 <h5>Sistema de recomendação de alimentação conforme localização.</h5>

</center>

## 💡Tecnologias Utilizadas
- Esse projeto foi desenvolvido com as seguintes tecnologias:

	- Node.js (acima da versão v14.19.1)
	- Cypress
	- MongoDB
	
##📰 Cenários implementados no projeto
- Deve logar com sucesso
- Não deve logar com senha inválida
- Não deve logar com instagram inexistente
- Campo instagram na tela de login deve ser obrigátorio
- Campo senha na tela de login deve ser obrigatório
- Todos os campos na tela de login devem ser obrigatórios

##🔍 Instalação do yarn e instalação do Cypress
Na pasta do projeto abra o terminal ou no VSCode use o Ctrl + ' (aspas simples), e digite os comandos abaixo:

```
yarn install
yarn add cypress@10.4.0 --save --dev
```


## ☕ Executando o projeto

#### Backend
- **Acessar a pasta backend dentro do projeto e digitar os comandos:**
```
cd backend/
yarn dev
```


#### Frontend
- **Acessar a pasta frontend dentro do projeto e digitar os comandos:**
```
cd frontend/
yarn dev
```

## ⚙️ Executando testes com Cypress 
- **Acessar a pasta tests dentro do projeto.**

- **Iniciar o Cypress no navegador:**
```
npx cypress open
```

- **Para executar em modo headless:**
```
npx cypress run
```
