import fs from "fs";
import { Property, User } from "./protocols";
import logger from "./logger";

export function transformData(user: User) {
  return {
    address: `${user.location.street.name} ${user.location.street.number} ${user.location.postcode} ${user.location.city} ${user.location.state} ${user.location.country}`,
    box: "64ac62633f250c0014f65dc2",
    client: {
      observation: user.email,
      code: `${user.name.first.toLowerCase()}.${user.name.last.toLowerCase()}`,
    },
    auto_connect: false,
    force: true,
  };
}

export function storeLastProperty(data: Property) {
  fs.writeFileSync("lastProperty.json", JSON.stringify(data, null, 2));
  logger.info(`Last property stored: ${JSON.stringify(data.client.code)}`);
}

export function getLastProperty() {
  if (fs.existsSync("lastProperty.json")) {
    return JSON.parse(fs.readFileSync("lastProperty.json", "utf-8"));
  }
  logger.info(
    `It's not possible to get the last property stored or file is empty`
  );
  return null;
}
