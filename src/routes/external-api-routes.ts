import { Router } from "express";
import { getRandomUser } from "../controllers/external-api-controllers";

const externalApiRouter = Router();

externalApiRouter.get("", getRandomUser);

export { externalApiRouter };
