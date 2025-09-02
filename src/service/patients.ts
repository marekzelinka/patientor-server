import { v1 as uuid } from "uuid";
import { patients } from "../data/patients.ts";
import type { NewPatient, NonSensitivePatient, Patient } from "../types.ts";

export const patientService = {
	getAll: (): Patient[] => {
		return patients;
	},
	getNonSensitive: (): NonSensitivePatient[] => {
		return patients.map(
			({ ssn: _ssn, ...patient }): NonSensitivePatient => patient,
		);
	},
	addOne: (newPatient: NewPatient): Patient => {
		const patient: Patient = {
			id: uuid(),
			...newPatient,
		};

		patients.push(patient);

		return patient;
	},
};
