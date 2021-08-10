import { ObjectId } from "mongoose"

export class ContentsDto {
    file: Express.Multer.File
    suppliersID: ObjectId
}