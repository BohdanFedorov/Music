import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId, Types } from 'mongoose';
import { ContentsStatus, ContentsTypes } from '../contents.types';



export type ContentsDoc = Contents & Document;

@Schema({ autoIndex: true })
export class Contents {
    @Prop({ type: String })
    path: string
    @Prop({ type: ContentsTypes })
    type: ContentsTypes
    @Prop({ type: Date })
    date: Date
    @Prop({ type: String })
    name: string
    @Prop({ type: Types.ObjectId })
    supplier: ObjectId
    @Prop({ type: ContentsStatus })
    status: ContentsStatus
}

export const ContentsSchema = SchemaFactory.createForClass(Contents);