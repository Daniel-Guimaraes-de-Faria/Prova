"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deposit = void 0;
exports.initializeDeposit = initializeDeposit;
const sequelize_1 = require("sequelize");
class Deposit extends sequelize_1.Model {
}
exports.Deposit = Deposit;
function initializeDeposit(sequelize) {
    Deposit.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        clientId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        operationDate: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
        },
        depositValue: {
            type: sequelize_1.DataTypes.DOUBLE,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "Deposit",
        tableName: "deposit",
        timestamps: false,
        freezeTableName: true,
    });
}
