import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Image } from 'src/schemas/image.schema';
import { CreateImageDTO } from './dto/createImage.dto';
import { PaginationDTO } from './dto/pagination.dto';

@Injectable()
export class ImageService {

    constructor(@InjectModel(Image.name) private model: Model<Image>) {}

    getAll(pagination: PaginationDTO) {
        return this.model.find().skip(pagination.skip).limit(pagination.limit ?? 10).exec();
    }

    create(body: CreateImageDTO) {
        const newImage = new this.model(body);
        return newImage.save();
    }
}
