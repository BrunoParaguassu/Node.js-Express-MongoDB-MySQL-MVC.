const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Sequelize','root','170614@Ba',{
    host: 'localhost',
    dialect: 'mysql',
});

try {
    sequelize.authenticate();
    console.log('Conectado com sucesso!');
}catch(err){
    console.log('Erro ao conectar!');
}

module.exports = sequelize;
