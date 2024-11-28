"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractRepository = void 0;
const contract_models_js_1 = require("../models/contract-models.js");
const sequelize_1 = require("sequelize");
class ContractRepository {
    // Criar contrato
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contract = yield contract_models_js_1.Contract.create(data);
                return contract;
            }
            catch (error) {
                throw new Error(`Impossível criar contrato: ${error.message}`);
            }
        });
    }
    // Encontrar todos os contratos
    findAll(options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Usa as opções fornecidas ou um objeto vazio
                return yield contract_models_js_1.Contract.findAll(options || {});
            }
            catch (error) {
                throw new Error(`Impossível encontrar contratos: ${error.message}`);
            }
        });
    }
    findContractbyProfile(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield contract_models_js_1.Contract.findAll({
                    where: {
                        [sequelize_1.Op.or]: [
                            { clientId: id },
                            { contractorId: id }
                        ]
                    },
                });
            }
            catch (error) {
                throw new Error(`Erro ao buscar os contratos do Profile ${id} : ${error.message}`);
            }
        });
    }
    // Encontrar contrato por ID
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield contract_models_js_1.Contract.findByPk(id);
            }
            catch (error) {
                throw new Error(`Impossível encontrar contrato pelo ID ${id}: ${error.message}`);
            }
        });
    }
    // Atualizar contrato por ID
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contract = yield contract_models_js_1.Contract.findByPk(id);
                if (!contract) {
                    throw new Error(`Contrato com ID ${id} não encontrado`);
                }
                yield contract.update(data);
                return contract;
            }
            catch (error) {
                throw new Error(`Impossível atualizar contrato com ID ${id}: ${error.message}`);
            }
        });
    }
    // Excluir contrato por ID
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield contract_models_js_1.Contract.destroy({
                    where: { id }
                });
                if (result === 0) {
                    throw new Error(`Contrato com ID ${id} não encontrado`);
                }
            }
            catch (error) {
                throw new Error(`Impossível excluir contrato com ID ${id}: ${error.message}`);
            }
        });
    }
}
exports.ContractRepository = ContractRepository;
