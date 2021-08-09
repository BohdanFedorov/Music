import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Schema } from 'mongoose';
import { createUserDto } from './dto/createUser.dto';
import { defaultUserDto } from './dto/defaultUser.dto';
import { deleteUserDto } from './dto/deleteUser.dto';
import { User } from './schema/user.schema';

import { UsersService } from './user.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Get('all')
    @ApiResponse({ status: 200, description: 'User has been found', type: [defaultUserDto] })
    async findAll(): Promise<defaultUserDto[]> {
        return this.userService.findAll()
    }

    @Post('create')
    @ApiResponse({ status: 201, description: 'The user has been successfully created.' })
    async createUser(@Body() createUserDto: createUserDto) {
        return this.userService.create(createUserDto)
    }

    @Delete('delete')
    @ApiParam({ name: '_id', type: Schema.Types.ObjectId, required: true, description: 'userID' })
    @ApiResponse({ status: 200, type: defaultUserDto ,description: "user has been delete" })
    async deleteUser(@Body() deleteUserDto: deleteUserDto) {
        return this.userService.delete(deleteUserDto)
    }

}
