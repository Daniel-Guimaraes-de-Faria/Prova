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
exports.DatabaseSeeder = void 0;
const profile_models_js_1 = require("../models/profile-models.js");
const contract_models_js_1 = require("../models/contract-models.js");
const job_models_js_1 = require("../models/job-models.js");
const deposit_models_js_1 = require("../models/deposit-models.js");
const Payment_models_js_1 = require("../models/Payment-models.js");
//Populando o banco
class DatabaseSeeder {
    createProfiles() {
        return __awaiter(this, void 0, void 0, function* () {
            const profiles = [
                { "firstName": "Alice", "lastName": "Silva", "profession": "Engenheira", "balance": 5000, "type": "client" },
                { "firstName": "Bob", "lastName": "Santos", "profession": "Desenvolvedor", "balance": 3000, "type": "contractor" },
                { "firstName": "Carlos", "lastName": "Pereira", "profession": "Designer", "balance": 4000, "type": "contractor" },
                { "firstName": "Daniela", "lastName": "Costa", "profession": "Gerente", "balance": 5500, "type": "client" },
                { "firstName": "Eduardo", "lastName": "Melo", "profession": "Arquiteto", "balance": 2500, "type": "contractor" },
                { "firstName": "Fernanda", "lastName": "Almeida", "profession": "Consultora", "balance": 7000, "type": "client" },
                { "firstName": "Gustavo", "lastName": "Ribeiro", "profession": "Analista", "balance": 3200, "type": "contractor" },
                { "firstName": "Helena", "lastName": "Souza", "profession": "Engenheira Civil", "balance": 4800, "type": "client" },
                { "firstName": "Igor", "lastName": "Machado", "profession": "Gerente de Projetos", "balance": 6000, "type": "contractor" },
                { "firstName": "Juliana", "lastName": "Lima", "profession": "Advogada", "balance": 8000, "type": "client" },
                { "firstName": "Lara", "lastName": "Dias", "profession": "Contadora", "balance": 5000, "type": "client" },
                { "firstName": "Marcos", "lastName": "Oliveira", "profession": "Engenheiro", "balance": 4200, "type": "contractor" },
                { "firstName": "Natalia", "lastName": "Ferreira", "profession": "Médica", "balance": 9000, "type": "client" },
                { "firstName": "Paulo", "lastName": "Gomes", "profession": "Advogado", "balance": 3500, "type": "contractor" },
                { "firstName": "Renata", "lastName": "Farias", "profession": "Psicóloga", "balance": 7600, "type": "client" },
                { "firstName": "Thiago", "lastName": "Lacerda", "profession": "Engenheiro Mecânico", "balance": 4500, "type": "contractor" },
                { "firstName": "Vanessa", "lastName": "Martins", "profession": "Arquiteta", "balance": 6200, "type": "client" },
                { "firstName": "Wilson", "lastName": "Carvalho", "profession": "Engenheiro Civil", "balance": 5000, "type": "contractor" },
                { "firstName": "Yara", "lastName": "Castro", "profession": "Consultora Financeira", "balance": 8000, "type": "client" },
                { "firstName": "Zeca", "lastName": "Alves", "profession": "Programador", "balance": 4000, "type": "contractor" }
            ];
            yield profile_models_js_1.Profile.bulkCreate(profiles);
        });
    }
    createContracts() {
        return __awaiter(this, void 0, void 0, function* () {
            const contracts = [
                { "terms": "Consultoria", "clientId": 1, "contractorId": 2, "operationDate": new Date("2024-11-01"), "status": "ativo" },
                { "terms": "Validação", "clientId": 2, "contractorId": 1, "operationDate": new Date("2021-11-25"), "status": "finalizado" },
                { "terms": "Desenvolvimento de Software", "clientId": 3, "contractorId": 4, "operationDate": new Date("2024-11-05"), "status": "ativo" },
                { "terms": "Design de Interiores", "clientId": 5, "contractorId": 6, "operationDate": new Date("2024-11-08"), "status": "finalizado" },
                { "terms": "Projeto Arquitetônico", "clientId": 7, "contractorId": 8, "operationDate": new Date("2024-11-12"), "status": "ativo" },
                { "terms": "Gerenciamento de Projetos", "clientId": 9, "contractorId": 10, "operationDate": new Date("2024-11-15"), "status": "ativo" },
                { "terms": "Marketing Digital", "clientId": 11, "contractorId": 13, "operationDate": new Date("2024-11-17"), "status": "finalizado" },
                { "terms": "Auditoria de Sistema", "clientId": 14, "contractorId": 12, "operationDate": new Date("2024-11-18"), "status": "ativo" },
                { "terms": "Criação de Website", "clientId": 3, "contractorId": 14, "operationDate": new Date("2024-10-22"), "status": "ativo" },
                { "terms": "Análise de Mercado", "clientId": 6, "contractorId": 13, "operationDate": new Date("2024-09-14"), "status": "finalizado" },
                { "terms": "Planejamento Financeiro", "clientId": 8, "contractorId": 15, "operationDate": new Date("2024-11-01"), "status": "ativo" },
                { "terms": "Implementação de ERP", "clientId": 9, "contractorId": 12, "operationDate": new Date("2024-10-10"), "status": "ativo" },
                { "terms": "Projeto de Paisagismo", "clientId": 7, "contractorId": 6, "operationDate": new Date("2023-12-15"), "status": "finalizado" },
                { "terms": "Treinamento de Equipe", "clientId": 2, "contractorId": 8, "operationDate": new Date("2024-08-20"), "status": "ativo" },
                { "terms": "Auditoria Contábil", "clientId": 11, "contractorId": 16, "operationDate": new Date("2024-09-30"), "status": "ativo" },
                { "terms": "Design Gráfico", "clientId": 12, "contractorId": 17, "operationDate": new Date("2024-06-12"), "status": "finalizado" },
                { "terms": "Consultoria Jurídica", "clientId": 10, "contractorId": 18, "operationDate": new Date("2024-07-18"), "status": "ativo" },
                { "terms": "Manutenção Predial", "clientId": 14, "contractorId": 19, "operationDate": new Date("2024-03-05"), "status": "finalizado" },
                { "terms": "Automação Residencial", "clientId": 13, "contractorId": 20, "operationDate": new Date("2024-05-22"), "status": "ativo" },
                { "terms": "Estratégia de Marketing", "clientId": 15, "contractorId": 17, "operationDate": new Date("2024-04-18"), "status": "ativo" },
                { "terms": "Reforma de Escritório", "clientId": 16, "contractorId": 19, "operationDate": new Date("2024-02-27"), "status": "finalizado" },
                { "terms": "Criação de Identidade Visual", "clientId": 17, "contractorId": 18, "operationDate": new Date("2024-10-15"), "status": "ativo" },
                { "terms": "Desenvolvimento Mobile", "clientId": 18, "contractorId": 20, "operationDate": new Date("2024-01-05"), "status": "ativo" }
            ];
            yield contract_models_js_1.Contract.bulkCreate(contracts);
        });
    }
    createJobs() {
        return __awaiter(this, void 0, void 0, function* () {
            const jobs = [
                { "contractId": 1, "description": "Revisão de Arquitetura", "operationDate": new Date("2024-11-02"), "paymentDate": null, "price": 2000, "paid": false },
                { "contractId": 1, "description": "Revisão de Arquitetura", "operationDate": new Date("2024-11-04"), "paymentDate": null, "price": 3500, "paid": false },
                { "contractId": 1, "description": "Revisão de Arquitetura", "operationDate": new Date("2024-10-04"), "paymentDate": null, "price": 5000, "paid": true },
                { "contractId": 1, "description": "Revisão de Arquitetura", "operationDate": new Date("2024-11-06"), "paymentDate": null, "price": 1500, "paid": false },
                { "contractId": 2, "description": "Desenvolvimento Backend", "operationDate": new Date("2024-11-06"), "paymentDate": null, "price": 3500, "paid": false },
                { "contractId": 2, "description": "Desenvolvimento Backend", "operationDate": new Date("2024-11-12"), "paymentDate": null, "price": 2200, "paid": false },
                { "contractId": 3, "description": "Elaboração de Modelos", "operationDate": new Date("2024-11-09"), "paymentDate": new Date("2024-11-10"), "price": 1500, "paid": true },
                { "contractId": 4, "description": "Análise de Desempenho", "operationDate": new Date("2024-11-13"), "paymentDate": null, "price": 2500, "paid": false },
                { "contractId": 5, "description": "Gerenciamento de Recursos", "operationDate": new Date("2024-11-16"), "paymentDate": new Date("2024-11-17"), "price": 3000, "paid": true }
            ];
            yield job_models_js_1.Job.bulkCreate(jobs);
        });
    }
    createDeposits() {
        return __awaiter(this, void 0, void 0, function* () {
            const deposits = [
                { "clientId": 1, "operationDate": new Date("2024-11-01"), "depositValue": 500 },
                { "clientId": 2, "operationDate": new Date("2024-11-03"), "depositValue": 1000 },
                { "clientId": 3, "operationDate": new Date("2024-11-05"), "depositValue": 1500 },
                { "clientId": 4, "operationDate": new Date("2024-11-07"), "depositValue": 2000 },
                { "clientId": 5, "operationDate": new Date("2024-11-09"), "depositValue": 750 }
            ];
            yield deposit_models_js_1.Deposit.bulkCreate(deposits);
        });
    }
    createPayments() {
        return __awaiter(this, void 0, void 0, function* () {
            const payments = [
                { "jobId": 1, "operationDate": new Date("2024-11-05"), "paymentValue": 2000 },
                { "jobId": 2, "operationDate": new Date("2024-11-09"), "paymentValue": 3500 },
                { "jobId": 3, "operationDate": new Date("2024-11-11"), "paymentValue": 1500 },
                { "jobId": 4, "operationDate": new Date("2024-11-14"), "paymentValue": 2500 },
                { "jobId": 5, "operationDate": new Date("2024-11-18"), "paymentValue": 3000 }
            ];
            yield Payment_models_js_1.Payment.bulkCreate(payments);
        });
    }
}
exports.DatabaseSeeder = DatabaseSeeder;
