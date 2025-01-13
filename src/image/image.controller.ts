import { Body, Controller, Get, Post } from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDTO } from './dto/createImage.dto';

@Controller('image')
export class ImageController {

    constructor(private service: ImageService) { }

    @Get()
    getAll() {
        return this.service.getAll();
    }

    @Post()
    create(@Body() body: CreateImageDTO) {
        return this.service.create(body);
    }
}
