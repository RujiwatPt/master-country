import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  masterCountry: { type: String, required: false },
});

export class User {
  constructor(
    public username: string,
    public password: string,
    public masterCountry: string,
  ) {}
}
