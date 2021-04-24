export interface IUser {
    name: string,
  gender: () => string,
  email: string,
  address: Address,
  phone: string
}

type Address = {
    street: string,
    city: string,
    country: string
}