import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Image } from 'src/schemas/image.schema';
import { CreateImageDTO } from './dto/createImage.dto';
import { Query } from 'express-serve-static-core';

@Injectable()
export class ImageService {

    constructor(@InjectModel(Image.name) private model: Model<Image>) { }

    async getAll(query: Query) {

        const resultsPerPage = Number(query.resultsPerPage) || 10;
        const currentPage = Number(query.page) || 1;
        const skip = resultsPerPage * (currentPage - 1);

        const totalImages = await this.model.find().countDocuments();

        const totalPages = Math.ceil(totalImages / resultsPerPage);

        return {
            results: await this.model.find().skip(skip).limit(resultsPerPage).exec(),
            totalPages
        }

    }

    getAllWithoutPagination() {
        return this.model.find().exec();
    }

    create(body: CreateImageDTO) {
        const newImage = new this.model(body);
        return newImage.save();
    }
}
