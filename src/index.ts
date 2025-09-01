import express from "express";
import { diagnosisRouter } from "./routes/diagnoses.ts";
import { patientRouter } from "./routes/patients.ts";

const app = express();
app.use(express.json());

app.get("/api/ping", (_req, res) => {
	res.send("pong");
});

app.use("/api/diagnoses", diagnosisRouter);
app.use("/api/patients", patientRouter);

const PORT = process.env.PORT || "3000";
app.listen(PORT, () => {
	console.log(`🚀 Server running on port ${PORT}`);
});
