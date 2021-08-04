import { ApiProperty } from "@nestjs/swagger";

export class ConnectToRoomDto {
    @ApiProperty({ type: String, required: true, example: '610a89305825c56e7c6d0f77', description: 'Wherever you want connect' })
    roomID: string
    @ApiProperty({ type: String, required: true, example: '610a89305825c56e7c6d0f77', description: 'Who wonts' })
    userID: string
}