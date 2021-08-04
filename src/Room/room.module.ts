import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { Module } from '@nestjs/common';
import { Room, RoomSchema } from './schema/room.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{ name: Room.name, schema: RoomSchema }])],
    controllers: [RoomController,],
    providers: [RoomService,],
})
export class RoomModule { }
