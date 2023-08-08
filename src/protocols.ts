export type Property = {
  address: string;
  box: string;
  client: {
    code: string;
    observation: string;
  };
  auto_connect: boolean;
  force: boolean;
};

export type User = {
  location: {
    street: { name: string; number: number };
    postcode: number;
    city: string;
    state: string;
    country: string;
    coordinates: { latitude: any; longitude: any };
  };
  name: { first: string; last: string };
  email: string;
};
