import { ApiProperty } from "@nestjs/swagger";

export class createUserDto {
    @ApiProperty({ type: String, required: true, example: 'Bohdan', description: 'Name user' })
    name: string

    @ApiProperty({ type: String, required: true, example: '+48884448658', description: 'Phone number account in telegram' })
    phoneNumber: string
}