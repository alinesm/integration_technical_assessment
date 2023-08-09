import axios from "axios";
import { Property } from "../protocols";
import { getLastProperty, storeLastProperty } from "../helpers";
import externalApiService from "../services/external-api-services";
import cron from "node-cron";
import logger from "../../logger";
import { updateReport } from "../helpers/update-report";

export async function createProperty(property: Property) {
  const options = {
    method: "POST",
    url: process.env.OZMAP_API_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: process.env.OZMAP_API_KEY,
    },
    data: property,
  };
  try {
    const { data } = await axios.request(options);
    console.log("data", data);

    logger.info(
      `Property created for client_code: ${property.client.code} -> Data: ` +
        JSON.stringify(data)
    );
    updateReport(`Property created for client_code: ${property.client.code}`);
  } catch (error) {
    logger.error(
      `Error while creating property for client_code: ${property.client.code} ` +
        JSON.stringify(error.response.data)
    );
    updateReport(
      `Error while creating property for client_code: ${property.client.code} `
    );
  }
}

export async function createTwoProperties() {
  let lastPropertyStored = getLastProperty();

  try {
    if (lastPropertyStored) {
      await createProperty(lastPropertyStored);
    }

    const newProperty: Property =
      await externalApiService.getUserAndtransformToProperty();
    await createProperty(newProperty);

    storeLastProperty(newProperty);
  } catch (error) {
    logger.error("Error in createTwoProperties: " + error.message);
  }
}

const intervalMinutes = process.env.INTERVAL_MINUTES || "1";

cron.schedule(`*/${intervalMinutes} * * * *`, async () => {
  console.log("Executando a tarefa");
  await createTwoProperties();
});
