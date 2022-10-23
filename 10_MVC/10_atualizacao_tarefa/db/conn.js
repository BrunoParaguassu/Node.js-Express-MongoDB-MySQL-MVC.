const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mvc", "root", "170614@Ba", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conectado com sucesso!");
} catch (error) {
  console.error("Não foi possível conectar: ", error);
}

module.exports = sequelize;
