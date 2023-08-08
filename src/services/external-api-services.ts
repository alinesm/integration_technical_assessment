import externalApiRepository from "../repositories/external-api-repository";
import { transformData } from "../helpers/index";
import { Property } from "../protocols";

async function getUserAndtransformToProperty(): Promise<Property> {
  const randomUserData = await externalApiRepository.getRandomUser();
  const property = transformData(randomUserData);

  return property;
}

const externalApiService = {
  getUserAndtransformToProperty,
};

export default externalApiService;
