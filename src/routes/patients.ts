import express, { type Response } from "express";
import { toNewPatient } from "../lib/patient.ts";
import { patientService } from "../service/patients.ts";
import type { NonSensitivePatient, Patient } from "../types.ts";

export const patientRouter = express.Router();

patientRouter.get("/", (_req, res: Response<NonSensitivePatient[]>) => {
	res.json(patientService.getNonSensitive());
});

patientRouter.post("/", (req, res: Response<Patient | { error: string }>) => {
	try {
		const newPatient = toNewPatient(req.body);

		const patient = patientService.addOne(newPatient);

		res.json(patient);
	} catch (error) {
		let errorMessage = "Something went wrong.";

		if (error instanceof Error) {
			errorMessage += ` Error: ${error.message}`;
		}

		res.status(400).json({ error: errorMessage });
	}
});
