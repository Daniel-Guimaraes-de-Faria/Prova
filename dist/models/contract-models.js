"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contract = void 0;
exports.initializeContract = initializeContract;
const sequelize_1 = require("sequelize");
// Classe do modelo Contract
class Contract extends sequelize_1.Model {
    // Método estático para inicializar associações
    static associate(models) {
        Contract.belongsTo(models.Profile, { foreignKey: "clientId", as: "client" });
        Contract.belongsTo(models.Profile, { foreignKey: "contractorId", as: "contractor" });
    }
}
exports.Contract = Contract;
// Função de inicialização do modelo Contract
function initializeContract(sequelize) {
    Contract.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        terms: {
            type: sequelize_1.DataTypes.STRING(45), // Limite de 45 caracteres para os termos
            allowNull: false,
        },
        clientId: {
            type: sequelize_1.DataTypes.INTEGER, // Relacionado ao cliente
            allowNull: false,
        },
        contractorId: {
            type: sequelize_1.DataTypes.INTEGER, // Relacionado ao contratante
            allowNull: false,
        },
        operationDate: {
            type: sequelize_1.DataTypes.DATE, // Data da operação
            allowNull: false,
        },
        status: {
            type: sequelize_1.DataTypes.STRING(11), // Status (ativo, finalizado, etc.)
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "Contract",
        tableName: "contract",
        timestamps: false, // Não usar timestamps automáticos
        freezeTableName: true, // Impede o Sequelize de pluralizar o nome da tabela
    });
}
