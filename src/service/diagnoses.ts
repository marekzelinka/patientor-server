import { diagnoses } from "../data/diagnoses.ts";
import type { Diagnosis } from "../types.ts";

export const diagnosisService = {
	getAll: (): Diagnosis[] => {
		return diagnoses;
	},
	addOne: () => {
		// TODO: implement
		return null;
	},
};
