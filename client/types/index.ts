type Address = {
    street : string
    city : string
    country : string

}

export interface IUser {
    name: string
    gender : string
    email : string
    address : Address
    phone : string
}

export interface IUserData {
    users: IUser[];
  }