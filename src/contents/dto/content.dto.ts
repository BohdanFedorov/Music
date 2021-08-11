import { User } from "src/User/schema/user.schema";
import { ContentsStatus, ContentsTypes } from "../contents.types";

export interface IContents {
    url:URL
    type:ContentsTypes
    date:Date
    name:string
    supplier:User
    status:ContentsStatus   
}