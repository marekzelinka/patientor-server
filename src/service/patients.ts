import { patients } from "../data/patients.ts";
import type { NonSensitivePatient, Patient } from "../types.ts";

export const patientService = {
	getAll: (): Patient[] => {
		return patients;
	},
	getNonSensitive: (): NonSensitivePatient[] => {
		return patients.map(
			({ ssn: _ssn, ...patient }): NonSensitivePatient => patient,
		);
	},
	addOne: () => {
		// TODO: implement
		return null;
	},
};
