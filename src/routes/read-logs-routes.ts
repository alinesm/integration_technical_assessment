import { Router } from "express";
import { getLogs } from "../controllers/read-logs-controllers";

const logsRouter = Router();

logsRouter.get("", getLogs);

export { logsRouter };
