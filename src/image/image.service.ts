import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Image } from 'src/schemas/image.schema';
import { CreateImageDTO } from './dto/createImage.dto';

@Injectable()
export class ImageService {

    constructor(@InjectModel(Image.name) private model: Model<Image>) {}

    getAll() {
        return 'getting all images!';
    }

    create(body: CreateImageDTO) {
        const newImage = new this.model(body);
        return newImage.save();
    }
}
