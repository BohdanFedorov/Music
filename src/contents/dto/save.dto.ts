import { ObjectId } from "mongoose"
import { ContentsStatus, ContentsTypes } from "../contents.types"

export class SaveDto {
    path: string
    type: ContentsTypes
    date: Date
    name: string
    supplier: ObjectId
    status: ContentsStatus
}