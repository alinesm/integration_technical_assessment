import express from "express";
import cors from "cors";
import { externalApiRouter } from "./routes/external-api-routes";
import dotenv from "dotenv";
dotenv.config();

const port = +process.env.PORT || 4000;

const app = express();
app.use(cors()).use(express.json()).use("/users", externalApiRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});

export default app;
