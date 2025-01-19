import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDTO } from './dto/createImage.dto';
import { query } from 'express';

@Controller('image')
export class ImageController {

    constructor(private service: ImageService) { }

    @Get('all-no-pag')
    getAllWithoutPagination() {
        return this.service.getAllWithoutPagination();
    }
    
    @Get()
    getAll(@Query() query) {
        return this.service.getAll(query);
    }

    @Post()
    create(@Body() body: CreateImageDTO) {
        return this.service.create(body);
    }

    @Post('seed')
    seed(@Query() query) {
        return this.service.seed(query);
    }
}
