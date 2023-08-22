export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  sex: number;
  profilePicture: string;
  position: string;
}

export interface Address {
  country: {
    name: string;
  };
  city: {
    name: string;
  };
  street: string;
  house: string;
  zipCode: string;
  longitude: string;
  latitude: string;
}
