import { Request, Response } from "express";
import externalApiService from "../services/external-api-services";
import { storeLastProperty } from "../helpers/index";
import logger from "../../logger";
import { updateReport } from "../helpers/update-report";

export async function getRandomUser(req: Request, res: Response) {
  try {
    const randomUserDataTransformed =
      await externalApiService.getUserAndtransformToProperty();

    storeLastProperty(randomUserDataTransformed);

    res.status(200).json(randomUserDataTransformed);

    logger.info(
      `Success in fetch user and add property info to client_code: ${randomUserDataTransformed.client.code} -> Data: ` +
        JSON.stringify(randomUserDataTransformed)
    );
    updateReport(
      "info",
      `Success in fetch user and add property info to client_code: ${randomUserDataTransformed.client.code}`
    );
  } catch (error) {
    res.status(404).send(error.message);
    logger.error(`Error while fetching random user : ${error} `);
  }
}
