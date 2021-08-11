import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IContents } from './dto/content.dto';
import { ContentsStatus, ContentsTypes } from './contents.types';

import { Contents, ContentsDoc } from './schema/content.schema';
import { IResource, AddExternalResourceDto, AddUploadedResourceDto } from './dto/resource.dto';


@Injectable()
export class ContentsService {
    constructor(
        @InjectModel(Contents.name) private contentsModel: Model<ContentsDoc>,
    ) { }
    getContent(): Promise<ContentsDoc> {
        return this.contentsModel.findOneAndUpdate({ "status": ContentsStatus.not_viewed }, { $set: { "status": ContentsStatus.viewed } }).exec()

    }

    addResource(resource: IResource, file?: Express.Multer.File): Promise<IContents> {
        const savedContent = new this.contentsModel(this.ResourceCastToContent(resource, file))
        return savedContent.save()
    }

    private ResourceCastToContent(resource: IResource, file?: Express.Multer.File): IContents {
        let Content: IContents = {
            url: new URL(""),
            type: ContentsTypes.default,
            date: new Date,
            name: "",
            supplier: resource.supplier,
            status: ContentsStatus.not_viewed
        }
        switch (typeof resource) {
            case typeof AddExternalResourceDto:
                Content.url = resource.url
                Content.name = resource.url.href
                Content.type = ContentsTypes[resource.url.hostname.split('.').join('')]
            case typeof AddUploadedResourceDto:
                Content.url = new URL(file.path)
                Content.name = file.originalname
                Content.type = ContentsTypes[file.originalname.split('.').pop()]
        }
        return Content
    }
}
