import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';


export type UserDoc = User & Document;

@Schema({autoIndex:true})
export class User {
    _id: ObjectId

    @Prop({ type: String, required: true })
    name: string

    @Prop({ type: String, required: true })
    phoneNumber: string
}

export const UserSchema = SchemaFactory.createForClass(User);