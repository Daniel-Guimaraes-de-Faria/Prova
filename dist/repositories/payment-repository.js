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
exports.PaymentRepository = void 0;
const Payment_models_js_1 = require("../models/Payment-models.js");
class PaymentRepository {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Payment_models_js_1.Payment.create(data);
            }
            catch (error) {
                throw new Error(`Impossível criar pagamento: ${error.message}`);
            }
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Payment_models_js_1.Payment.findAll();
            }
            catch (error) {
                throw new Error(`Impossível encontrar pagamentos: ${error.message}`);
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Payment_models_js_1.Payment.findByPk(id);
            }
            catch (error) {
                throw new Error(`Impossível encontrar pagamento pelo ID ${id}: ${error.message}`);
            }
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payment = yield Payment_models_js_1.Payment.findByPk(id);
                if (!payment) {
                    throw new Error(`Pagamento com ID ${id} não encontrado`);
                }
                yield payment.update(data);
                return payment;
            }
            catch (error) {
                throw new Error(`Impossível atualizar pagamento com ID ${id}: ${error.message}`);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield Payment_models_js_1.Payment.destroy({ where: { id } });
                if (result === 0) {
                    throw new Error(`Pagamento com ID ${id} não encontrado`);
                }
            }
            catch (error) {
                throw new Error(`Impossível excluir pagamento com ID ${id}: ${error.message}`);
            }
        });
    }
}
exports.PaymentRepository = PaymentRepository;
