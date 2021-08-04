import { ApiProperty } from "@nestjs/swagger";

export class CreateRoomDto {
    @ApiProperty({ type: String, required: true, example: '610a89305825c56e7c6d0f77', description: 'User id who wants to create a room' })
    creator: string
    @ApiProperty({ type: String, example: 'My best Room', description: 'Room name' })
    name: string
}