import { Router } from "express";
import { createTwoProperties } from "../controllers/properties-controllers";

const propertyRouter = Router();

propertyRouter.post("", createTwoProperties);

export { propertyRouter };
