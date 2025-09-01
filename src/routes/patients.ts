import express, { type Response } from "express";
import { patientService } from "../service/patients.ts";
import type { NonSensitivePatient } from "../types.ts";

export const patientRouter = express.Router();

patientRouter.get("/", (_req, res: Response<NonSensitivePatient[]>) => {
	res.json(patientService.getNonSensitive());
});
