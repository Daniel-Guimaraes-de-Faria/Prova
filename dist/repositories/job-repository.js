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
exports.JobRepository = void 0;
const job_models_js_1 = require("../models/job-models.js");
class JobRepository {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield job_models_js_1.Job.create(data);
            }
            catch (error) {
                throw new Error(`Erro ao criar Job: ${error.message}`);
            }
        });
    }
    findAll(p0) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield job_models_js_1.Job.findAll();
            }
            catch (error) {
                throw new Error(`Erro ao encontrar Jobs: ${error.message}`);
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield job_models_js_1.Job.findByPk(id);
            }
            catch (error) {
                throw new Error(`Erro ao encontrar Job com ID ${id}: ${error.message}`);
            }
        });
    }
    findAllPaidJobsByContract(contractId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield job_models_js_1.Job.findAll({
                    where: {
                        contractId,
                        paid: false, // Apenas jobs não pagos
                    },
                });
            }
            catch (error) {
                throw new Error(`Erro ao buscar Jobs pagos para o contrato ${contractId}: ${error.message}`);
            }
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const job = yield job_models_js_1.Job.findByPk(id);
                if (!job)
                    return null;
                yield job.update(data);
                return job;
            }
            catch (error) {
                throw new Error(`Erro ao atualizar Job com ID ${id}: ${error.message}`);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield job_models_js_1.Job.destroy({ where: { id } });
                if (result === 0)
                    throw new Error(`Job com ID ${id} não encontrado`);
            }
            catch (error) {
                throw new Error(`Erro ao excluir Job com ID ${id}: ${error.message}`);
            }
        });
    }
}
exports.JobRepository = JobRepository;
