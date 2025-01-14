import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Image } from 'src/schemas/image.schema';
import { CreateImageDTO } from './dto/createImage.dto';
import { Query } from 'express-serve-static-core';

@Injectable()
export class ImageService {

    constructor(@InjectModel(Image.name) private model: Model<Image>) {}

    getAll(query: Query) {

        const resultsPerPage = 2;
        const currentPage = Number(query.page) || 1;
        const skip = resultsPerPage * (currentPage - 1);

        return this.model.find().skip(skip).limit(resultsPerPage).exec();
    }

    create(body: CreateImageDTO) {
        const newImage = new this.model(body);
        return newImage.save();
    }
}
