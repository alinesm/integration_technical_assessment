import axios from "axios";
import { Property } from "../protocols";
import { getLastProperty, storeLastProperty } from "../helpers";
import externalApiService from "../services/external-api-services";

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
  } catch (error) {
    if (error) console.error(error.response.data);
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
    console.error(error);
  }
}
