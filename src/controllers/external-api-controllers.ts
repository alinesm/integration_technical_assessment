import { Request, Response } from "express";
import externalApiService from "../services/external-api-services";
import { storeLastProperty } from "../helpers/index";

export async function getRandomUser(req: Request, res: Response) {
  try {
    const randomUserDataTransformed =
      await externalApiService.getUserAndtransformToProperty();

    storeLastProperty(randomUserDataTransformed);

    res.status(200).json(randomUserDataTransformed);
  } catch (error) {
    res.status(404).send(error.message);
  }
}
