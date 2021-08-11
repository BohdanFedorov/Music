import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/User/schema/user.schema';

export type RoomDoc = Room & Document;

@Schema({ autoIndex: true })
export class Room {
    @Prop({ type: String, required: true })
    name: string

    @Prop({ type: User, required: true })
    creator: User

    @Prop({ type: [typeof User], unique: true })
    users: [User]

    @Prop({ type: String, default: "" })
    password: string

}

export const RoomSchema = SchemaFactory.createForClass(Room);