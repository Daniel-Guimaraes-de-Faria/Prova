"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const job_controllers_js_1 = require("../controllers/job-controllers.js");
const router = (0, express_1.Router)();
const jobController = new job_controllers_js_1.JobController();
router.post("/jobs", (req, res) => jobController.createJob(req, res));
router.get("/jobs", (req, res) => jobController.getAllJobs(req, res));
router.get("/jobs/:id", (req, res) => jobController.getJobById(req, res));
router.put("/jobs/:id", (req, res) => jobController.updateJob(req, res));
router.delete("/jobs/:id", (req, res) => jobController.deleteJob(req, res));
//Endpoint para listar Jobs não pagos integralmente
router.get("/contract/:contractId/unpaid", (req, res) => jobController.getUnpaidJobs(req, res));
exports.default = router;
