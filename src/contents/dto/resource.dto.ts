import { User } from "src/User/schema/user.schema"

export interface IResource {
    supplier: User
    url?: URL
}
export class AddExternalResourceDto implements IResource {
    supplier
    url: URL
}
export class AddUploadedResourceDto implements IResource {
    supplier
}