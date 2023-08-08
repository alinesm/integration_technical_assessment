import path from "path";
import logger from "../../logger";
import { Request, Response } from "express";

export function getLogs(req: Request, res: Response) {
  const logFilePath = path.join(__dirname, "..", "..", "application.log");
  try {
    res.sendFile(logFilePath);
  } catch (err) {
    logger.error(`Error serving log file: ${err.message}`);
    res.status(500).send("Could not retrieve logs.");
  }
}
