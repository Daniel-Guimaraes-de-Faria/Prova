import { Sequelize } from "sequelize";

//Configurando a conexão para o sqlite
const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'sqlite',
    storage: "./src/database/database.sqlite",
});

export default sequelize;
