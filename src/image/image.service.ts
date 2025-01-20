import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Image } from 'src/schemas/image.schema';
import { CreateImageDTO } from './dto/createImage.dto';
import { Query } from 'express-serve-static-core';
import { faker } from '@faker-js/faker';

@Injectable()
export class ImageService {
    
    constructor(@InjectModel(Image.name) private model: Model<Image>) { }
    
    async seed(query: Query) {

        const records: number = Number(query.records);

        const images: Image[] = [];

        //código de gambiarra para fazer seed do banco de dados
        for(let i = 0; i < records; i++) {
            const image = await this.model.create({
                title: faker.book.title(),
                description: faker.lorem.paragraph(),
                url: faker.image.urlPicsumPhotos({width: 1920, height: 1080, blur: 0})
            });

            images.push(image);

        }

        await this.model.insertMany(images);

        return 'ok';

    }

    async getAll(query: Query) {

        const resultsPerPage = Number(query.resultsPerPage) ?? 10;
        const currentPage = Number(query.page) || 1;
        const skip = resultsPerPage * (currentPage - 1);

        const images = await this.model.find().countDocuments();

        const totalPages = Math.ceil(images / resultsPerPage);

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
