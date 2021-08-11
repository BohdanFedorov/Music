import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/User/schema/user.schema';
import { ContentsStatus, ContentsTypes } from '../contents.types';
import { IContents } from '../dto/content.dto';



export type ContentsDoc = Contents & Document;

@Schema({ autoIndex: true })
export class Contents implements IContents {
    @Prop({ type: String, required: true })
    url: URL
    @Prop({ type: ContentsTypes, required: false })
    type: ContentsTypes
    @Prop({ type: Date, required: true })
    date: Date
    @Prop({ type: String, required: false })
    name: string
    @Prop({ type: User, required: true })
    supplier: User
    @Prop({ type: ContentsStatus })
    status: ContentsStatus
}

export const ContentsSchema = SchemaFactory.createForClass(Contents);