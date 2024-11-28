"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//Configurando a conexão para o sqlite
const sequelize = new sequelize_1.Sequelize({
    host: 'localhost',
    dialect: 'sqlite',
    storage: "./src/database/database.sqlite",
});
exports.default = sequelize;
