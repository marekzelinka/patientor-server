import express, { type Response } from "express";
import { diagnosisService } from "../service/diagnoses.ts";
import type { Diagnosis } from "../types.ts";

export const diagnosisRouter = express.Router();

diagnosisRouter.get("/", (_req, res: Response<Diagnosis[]>) => {
	res.json(diagnosisService.getAll());
});
