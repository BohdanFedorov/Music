import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ConnectToRoomDto } from './dto/connectToRoom.dto';
import { CreateRoomDto } from './dto/createRoom.dto';
import { RoomService } from './room.service';
import { Room } from './schema/room.schema';

@ApiTags('Room')
@Controller('room')
export class RoomController {
    constructor(private roomService: RoomService) { }

    @Get('openRooms')
    @ApiResponse({ status: 200, description: 'Return List of opened room' })
    async openedRooms(): Promise<Room[]> {
        return this.roomService.findOpenRoom()
    }

    @Get('connectToRoom')
    @ApiResponse({ status: 200, description: 'Return room' })
    async connectToRoom(@Body() connectToRoomDto: ConnectToRoomDto): Promise<Room> {
        return this.roomService.connectToRoom(connectToRoomDto)
    }

    @Post()
    @ApiResponse({ status: 201, description: 'The room created' })
    async createRoom(@Body() createRoomDto: CreateRoomDto): Promise<Room> {
        return this.roomService.createNewRoom(createRoomDto)
    }
}
