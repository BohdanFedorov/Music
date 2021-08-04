import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { createUserDto } from './dto/createUser.dto';
import { User } from './schema/user.schema';

import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    @ApiResponse({ status: 200, description: 'User has been found', type: createUserDto })
    @ApiResponse({ status: 404, description: 'User not found' })
    async findAll(): Promise<User[]> {
        return this.userService.findAll()
    }
    @Post()
    @ApiResponse({ status: 201, description: 'The user has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async createUser(@Body() createUserDto: createUserDto) {
        return this.userService.create(createUserDto)
    }

}
