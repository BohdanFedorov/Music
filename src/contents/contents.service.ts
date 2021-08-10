import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IContents } from './contents.interface';
import { ContentsStatus, ContentsTypes } from './contents.types';
import { ContentsDto } from './dto/content.dto';
import { SaveDto } from './dto/save.dto';
import { Contents, ContentsDoc } from './schema/content.schema';

@Injectable()
export class ContentsService {
    constructor(
        @InjectModel(Contents.name) private contentsModel: Model<ContentsDoc>,
    ) { }
    getContent(): Promise<ContentsDoc> {
        return this.contentsModel.findOneAndUpdate({ "status": ContentsStatus.not_viewed }, { $set: { "status": ContentsStatus.viewed } }).exec()

    }
    uploadFile(dto: ContentsDto) {
        const savedContent = new this.contentsModel(this.formatDto(dto))
        return savedContent.save()
    }
    private formatDto(dto:ContentsDto):SaveDto{
        const {path,originalname} = dto.file
        const type = ContentsTypes[originalname.split('.').pop()]
        const date = new Date()
        const name = originalname.split('.').shift()
        const supplier = dto.suppliersID
        const status = ContentsStatus.not_viewed
        return {path,type,date,name,supplier,status}
    }
    addExternalResource(resource: IContents) { }

    
}
