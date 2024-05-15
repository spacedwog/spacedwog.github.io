const Sequelize = require('sequelize');
const sequelize = new Sequelize('spacedwog', 'spacedwog', '6z2h1j3k9F!', {
    host: "10.129.62.41",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectando com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro)
})