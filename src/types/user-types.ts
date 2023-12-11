export interface IUserData {
  [value: string]: string | Blob | MediaSource;
}

export interface IUser {
  user: IUserData[];
}
