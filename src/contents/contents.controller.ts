import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { ContentsService } from './contents.service';
import { IResource } from './dto/resource.dto';

@ApiTags('Contents')
@Controller('contents')
export class ContentsController {
    constructor(private contentService: ContentsService) { }
    @Get()
    getContent() {
        return this.contentService.getContent()
    }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    addResource(@UploadedFile() file: Express.Multer.File, @Body() resource: IResource) {
        return this.contentService.addResource(resource, file)
    }
}
