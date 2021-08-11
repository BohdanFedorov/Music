import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/User/schema/user.schema';
import { ConnectToRoomDto } from './dto/connectToRoom.dto';
import { CreateRoomDto } from './dto/createRoom.dto';
import { Room, RoomDoc } from './schema/room.schema';

@Injectable()
export class RoomService {
    constructor(@InjectModel(Room.name) private roomModel: Model<RoomDoc>) { }

    async createNewRoom(dto: CreateRoomDto): Promise<Room> {
        const createdRoom = await new this.roomModel(dto)
        return createdRoom.save()
    }
    async connectToRoom(dto: ConnectToRoomDto): Promise<Room> {
        return this.roomModel.findByIdAndUpdate(dto.roomID,{$push:{users:dto.user}})
    }
    async findOpenRoom(): Promise<Room[]> {
        return this.roomModel.find({ password: "" })
    }

}
