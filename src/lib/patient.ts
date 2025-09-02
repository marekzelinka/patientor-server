import { Gender, type NewPatient } from "../types.ts";

export function toNewPatient(arg: unknown): NewPatient {
	if (!arg || typeof arg !== "object") {
		throw new Error("Incorrect or missing data");
	}

	if (
		"name" in arg &&
		"dateOfBirth" in arg &&
		"ssn" in arg &&
		"gender" in arg &&
		"occupation" in arg
	) {
		return {
			name: parseName(arg.name),
			dateOfBirth: parseDateOfBirth(arg.dateOfBirth),
			ssn: parseSsn(arg.ssn),
			gender: parseGender(arg.gender),
			occupation: parseOccupation(arg.occupation),
		};
	}

	throw new Error("Incorrect data: some fields are missing");
}

function parseName(name: unknown): string {
	if (!isString(name)) {
		throw new Error("Incorrect or missing name");
	}

	return name;
}

function parseDateOfBirth(dateOfBirth: unknown): string {
	if (!isString(dateOfBirth) || !isDate(dateOfBirth)) {
		throw new Error(`Incorrect or missing dateOfBirth: ${dateOfBirth}`);
	}

	return dateOfBirth;
}

function parseSsn(ssn: unknown): string {
	if (!isString(ssn)) {
		throw new Error("Incorrect or missing ssn");
	}

	return ssn;
}

function parseGender(gender: unknown): Gender {
	if (!isString(gender) || !isGender(gender)) {
		throw new Error(`Incorrect or missing gender: ${gender}`);
	}

	return gender;
}

function parseOccupation(occupation: unknown): string {
	if (!isString(occupation)) {
		throw new Error("Incorrect or missing occupation");
	}

	return occupation;
}

function isString(arg: unknown): arg is string {
	return typeof arg === "string" || arg instanceof String;
}

function isDate(string: string): boolean {
	return Boolean(Date.parse(string));
}

function isGender(string: string): string is Gender {
	return Object.values(Gender)
		.map((v) => v.toString())
		.includes(string);
}
