import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly Usermodel: Model<User>) {}

  async createUser(
    username: string,
    password: string,
    masterCountry: string,
  ): Promise<string | null> {
    const newUser = await this.Usermodel.create({
      _id: uuidv4(),
      username,
      password,
      masterCountry,
    });

    return newUser.id;
  }

  async findOne(username: string): Promise<User | null> {
    const user = await this.Usermodel.findOne({ username }).exec();

    return user;
  }
}
