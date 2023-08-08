import axios from "axios";
import { User } from "../protocols";

async function getRandomUser(): Promise<User> {
  const result = await axios.get(process.env.RANDOM_USER_API_URL);
  const randomUserData = result.data.results[0];

  return randomUserData;
}

const externalApiRepository = {
  getRandomUser,
};

export default externalApiRepository;
