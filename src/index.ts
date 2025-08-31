import express from "express";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || "3000";

app.get("/api/ping", (_req, res) => {
	res.send("pong");
});

app.listen(PORT, () => {
	console.log(`🚀 Server running on port ${PORT}`);
});
