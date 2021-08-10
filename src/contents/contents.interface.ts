import { ObjectId } from "mongoose";

export interface IContents {
    file:Express.Multer.File
    supplierId: ObjectId

}