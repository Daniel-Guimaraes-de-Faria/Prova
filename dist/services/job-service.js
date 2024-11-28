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
exports.JobService = void 0;
const job_repository_js_1 = require("../repositories/job-repository.js");
class JobService {
    constructor() {
        this.jobRepository = new job_repository_js_1.JobRepository();
    }
    createJob(jobData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.jobRepository.create(jobData);
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Impossível criar trabalho: ${error.message}`);
                }
                else {
                    throw new Error("Um erro desconhecido ocorreu ao tentar criar o trabalho.");
                }
            }
        });
    }
    getAllJobs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.jobRepository.findAll();
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Impossível encontrar trabalhos: ${error.message}`);
                }
                else {
                    throw new Error("Um erro desconhecido ocorreu ao tentar encontrar trabalhos.");
                }
            }
        });
    }
    getJobById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.jobRepository.findById(id);
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Impossível encontrar trabalho pelo ID ${id}: ${error.message}`);
                }
                else {
                    throw new Error("Um erro desconhecido ocorreu ao tentar encontrar o trabalho.");
                }
            }
        });
    }
    updateJob(id, updatedData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.jobRepository.update(id, updatedData);
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Impossível atualizar trabalho com ID ${id}: ${error.message}`);
                }
                else {
                    throw new Error("Um erro desconhecido ocorreu ao tentar atualizar o trabalho.");
                }
            }
        });
    }
    deleteJob(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.jobRepository.delete(id);
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Impossível excluir trabalho com ID ${id}: ${error.message}`);
                }
                else {
                    throw new Error("Um erro desconhecido ocorreu ao tentar excluir o trabalho.");
                }
            }
        });
    }
    // listar Jobs não pagos integralmente
    getUnpaidJobs(contractId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.jobRepository.findAllPaidJobsByContract(contractId);
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Failed to retrieve unpaid jobs for contract ID ${contractId}: ${error.message}`);
                }
                throw new Error("Unknown error occurred.");
            }
        });
    }
}
exports.JobService = JobService;
