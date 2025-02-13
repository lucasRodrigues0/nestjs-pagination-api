import { Model } from 'mongoose';
import { Image } from 'src/schemas/image.schema';
import { CreateImageDTO } from './dto/createImage.dto';
import { Query } from 'express-serve-static-core';
export declare class ImageService {
    private model;
    constructor(model: Model<Image>);
    getAll(query: Query): Promise<{
        results: (import("mongoose").Document<unknown, {}, Image> & Image & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
        totalPages: number;
    }>;
    getAllWithoutPagination(): Promise<(import("mongoose").Document<unknown, {}, Image> & Image & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    create(body: CreateImageDTO): Promise<import("mongoose").Document<unknown, {}, Image> & Image & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
