import { ApiProperty } from "@nestjs/swagger";
import { ObjectId, Schema } from 'mongoose';

export class deleteUserDto {
    @ApiProperty({ type: Schema.Types.ObjectId, required: true, example: '61112ad0300126359d087c74', description: 'User ID' })
    _id : ObjectId
}