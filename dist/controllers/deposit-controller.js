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
exports.DepositController = void 0;
const deposit_service_js_1 = require("../services/deposit-service.js");
class DepositController {
    constructor() {
        this.depositService = new deposit_service_js_1.DepositService();
    }
    createDeposit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newDeposit = yield this.depositService.createDeposit(req.body);
                res.status(201).json(newDeposit);
            }
            catch (error) {
                res.status(500).json({ message: "Falha ao criar um deposito", error: error.message });
            }
        });
    }
    getAllDeposits(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deposits = yield this.depositService.getAllDeposits();
                res.status(200).json(deposits);
            }
            catch (error) {
                res.status(500).json({ message: "Falha ao recuperar depositos", error: error.message });
            }
        });
    }
    getDepositById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deposit = yield this.depositService.getDepositById(Number(req.params.id));
                if (deposit) {
                    res.status(200).json(deposit);
                }
                else {
                    res.status(404).json({ message: "Deposito não encontrado" });
                }
            }
            catch (error) {
                res.status(500).json({ message: "Falha ao recuperar o deposito", error: error.message });
            }
        });
    }
    updateDeposit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedDeposit = yield this.depositService.updateDeposit(Number(req.params.id), req.body);
                if (updatedDeposit) {
                    res.status(200).json(updatedDeposit);
                }
                else {
                    res.status(404).json({ message: "Deposito não encontrado" });
                }
            }
            catch (error) {
                res.status(500).json({ message: "Falha ao atualizar o deposito", error: error.message });
            }
        });
    }
    deleteDeposit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.depositService.deleteDeposit(Number(req.params.id));
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ message: "falha ao excluir o deposito", error: error.message });
            }
        });
    }
    //Método para realizar deposito
    makeDeposit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const profileId = Number(req.params.profileId);
                const amount = Number(req.body.amount);
                console.log(`Realizando deposito para no Profile ID: ${profileId} de valor ${amount}`);
                const deposit = yield this.depositService.makeDeposit(profileId, amount);
                res.status(201).json({ messagem: `O deposito de valor ${amount} para o Profile de ID: ${profileId} foi realizado com sucesso!!!`, deposit });
            }
            catch (error) {
                res.status(500).json({ message: "falha ao fazer um deposito", error: error.message });
            }
        });
    }
}
exports.DepositController = DepositController;
