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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DataSeeder_js_1 = require("../bulkCreate/DataSeeder.js");
const router = express_1.default.Router();
const databaseSeeder = new DataSeeder_js_1.DatabaseSeeder();
// Rota para popular o banco com todos os dados
router.post("/seed", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield databaseSeeder.createProfiles();
        yield databaseSeeder.createContracts();
        yield databaseSeeder.createJobs();
        yield databaseSeeder.createDeposits();
        yield databaseSeeder.createPayments();
        res.status(200).json({ message: "Dados inseridos com sucesso!" });
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao popular o banco de dados", error: error.message });
    }
}));
exports.default = router;
