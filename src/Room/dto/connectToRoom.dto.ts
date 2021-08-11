import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/User/schema/user.schema";

export class ConnectToRoomDto {
    @ApiProperty({ type: String, required: true, example: '610a89305825c56e7c6d0f77', description: 'Wherever you want connect' })
    roomID: string
    @ApiProperty({ type: User, required: true, example: '610a89305825c56e7c6d0f77', description: 'Who wonts' })
    user: User
}