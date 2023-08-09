import externalApiRepository from "../repositories/external-api-repository";
import { transformData } from "../helpers/index";
import { Property } from "../protocols";

async function getUserAndtransformToProperty(): Promise<Property> {
  try {
    const randomUserData = await externalApiRepository.getRandomUser();
    const property = transformData(randomUserData);

    return property;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

const externalApiService = {
  getUserAndtransformToProperty,
};

export default externalApiService;
