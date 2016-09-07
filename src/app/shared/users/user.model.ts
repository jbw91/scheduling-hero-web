export interface User {
  _id?: string;
  userId: number;
  username: string;
  email: string;
  dateCreated: Date;
  profilePhoto: string;
  refreshToken: string;
}
