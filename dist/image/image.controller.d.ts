import { ImageService } from './image.service';
import { CreateImageDTO } from './dto/createImage.dto';
export declare class ImageController {
    private service;
    constructor(service: ImageService);
    getAllWithoutPagination(): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/image.schema").Image> & import("../schemas/image.schema").Image & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getAll(query: any): Promise<{
        results: (import("mongoose").Document<unknown, {}, import("../schemas/image.schema").Image> & import("../schemas/image.schema").Image & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
        totalPages: number;
    }>;
    create(body: CreateImageDTO): Promise<import("mongoose").Document<unknown, {}, import("../schemas/image.schema").Image> & import("../schemas/image.schema").Image & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
