import { ApiProperty } from "@nestjs/swagger";
import { ObjectId, Schema } from "mongoose";

export class defaultUserDto {
    @ApiProperty({ type: Schema.Types.ObjectId, example: "611134d05d90d453b92d2458", description: "Auto generated user id" })
    _id: ObjectId

    @ApiProperty({ type: String, example: 'Bohdan', description: 'User name' })
    name: string

    @ApiProperty({ type: String, example: '+48884448658', description: 'Phone number account in telegram' })
    phoneNumber: string
}