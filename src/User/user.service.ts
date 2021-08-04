import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDoc } from 'src/User/schema/user.schema';
import { createUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDoc>) { }

  async create(dto: createUserDto): Promise<User> {
    const createdUser = await new this.userModel(dto);
    return createdUser.save()
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

}
