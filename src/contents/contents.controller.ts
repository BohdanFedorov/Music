import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';
import { ContentsService } from './contents.service';

@ApiTags('Contents')
@Controller('contents')
export class ContentsController {
    constructor(private contentService:ContentsService){}
    @Get()
    getContent(){
        return this.contentService.getContent()
    }
    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFiles(@UploadedFile() file: Express.Multer.File,@Body() suppliersID:ObjectId){
        return this.contentService.uploadFile({file,suppliersID})
    }
    @Post('addCustomResource')
    addCustomResource(){
        this.contentService.addExternalResource
    }
}
