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
const profile_routes_js_1 = __importDefault(require("./routes/profile-routes.js"));
const job_routes_js_1 = __importDefault(require("./routes/job-routes.js"));
const contract_routes_js_1 = __importDefault(require("./routes/contract-routes.js"));
const deposit_routes_js_1 = __importDefault(require("./routes/deposit-routes.js"));
const payment_routes_js_1 = __importDefault(require("./routes/payment-routes.js"));
const DatabaseSeeder_routes_js_1 = __importDefault(require("./routes/DatabaseSeeder-routes.js"));
const connection_js_1 = __importDefault(require("./database/connection.js"));
const profile_models_js_1 = require("./models/profile-models.js");
const job_models_js_1 = require("./models/job-models.js");
const contract_models_js_1 = require("./models/contract-models.js");
const deposit_models_js_1 = require("./models/deposit-models.js");
const Payment_models_js_1 = require("./models/Payment-models.js");
const profile_models_js_2 = require("./models/profile-models.js");
const job_models_js_2 = require("./models/job-models.js");
const contract_models_js_2 = require("./models/contract-models.js");
const deposit_models_js_2 = require("./models/deposit-models.js");
const Payment_models_js_2 = require("./models/Payment-models.js");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
app.get("/", (req, res) => {
    res.status(200).send("Leonardo Node API - está usando ts");
});
app.use("/profile", profile_routes_js_1.default);
app.use("/contract", contract_routes_js_1.default);
app.use("/job", job_routes_js_1.default);
app.use("/deposit", deposit_routes_js_1.default);
app.use("/payment", payment_routes_js_1.default);
app.use("/database", DatabaseSeeder_routes_js_1.default);
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connection_js_1.default.authenticate();
        console.log("O banco de dados foi conectado com sucesso");
        (0, profile_models_js_1.initializeProfile)(connection_js_1.default);
        (0, contract_models_js_1.initializeContract)(connection_js_1.default);
        (0, job_models_js_1.initializeJob)(connection_js_1.default);
        (0, deposit_models_js_1.initializeDeposit)(connection_js_1.default);
        (0, Payment_models_js_1.initializePayment)(connection_js_1.default);
        profile_models_js_2.Profile.hasMany(contract_models_js_2.Contract, { foreignKey: "clientId", as: "clientContracts" });
        profile_models_js_2.Profile.hasMany(contract_models_js_2.Contract, { foreignKey: "contractorId", as: "contractorContracts" });
        contract_models_js_2.Contract.belongsTo(profile_models_js_2.Profile, { foreignKey: "clientId", as: "client" });
        contract_models_js_2.Contract.belongsTo(profile_models_js_2.Profile, { foreignKey: "contractorId", as: "contractor" });
        contract_models_js_2.Contract.hasMany(job_models_js_2.Job, { foreignKey: "contractId", as: "jobs" });
        job_models_js_2.Job.belongsTo(contract_models_js_2.Contract, { foreignKey: "contractId", as: "contract" });
        profile_models_js_2.Profile.hasMany(deposit_models_js_2.Deposit, { foreignKey: "clientId", as: "deposits" });
        deposit_models_js_2.Deposit.belongsTo(profile_models_js_2.Profile, { foreignKey: "clientId", as: "client" });
        job_models_js_2.Job.hasMany(Payment_models_js_2.Payment, { foreignKey: "jobId", as: "payments" });
        Payment_models_js_2.Payment.belongsTo(job_models_js_2.Job, { foreignKey: "jobId", as: "job" });
        yield connection_js_1.default.sync();
        console.log("Models sincronizado");
        app.listen(PORT, () => {
            console.log("O servidor está rodando na porta:", PORT);
        });
    }
    catch (error) {
        console.error("Impossível conectar com o banco de dados:", error);
    }
}))();
exports.default = app;
