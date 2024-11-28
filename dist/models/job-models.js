"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
exports.initializeJob = initializeJob;
const sequelize_1 = require("sequelize");
class Job extends sequelize_1.Model {
}
exports.Job = Job;
function initializeJob(sequelize) {
    Job.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        contractId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: false,
        },
        operationDate: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
        },
        paymentDate: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: true,
        },
        price: {
            type: sequelize_1.DataTypes.DOUBLE,
            allowNull: false,
        },
        paid: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    }, {
        sequelize,
        modelName: "Job",
        tableName: "job",
        timestamps: false,
        freezeTableName: true,
    });
}
