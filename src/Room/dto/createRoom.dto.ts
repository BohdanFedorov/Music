import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/User/schema/user.schema";

export class CreateRoomDto {
    @ApiProperty({ type: User, required: true, example: '610a89305825c56e7c6d0f77', description: 'User id who wants to create a room' })
    creator: User
    @ApiProperty({ type: String, required: true, example: 'My best Room', description: 'Room name' })
    name: string
    @ApiProperty({ type: String, required: false, example: "123456q", description: "Password to room" })
    password?: string
}