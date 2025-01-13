import { Controller, Get } from '@nestjs/common';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController {

    constructor(private service: ImageService) {}

    @Get()
    getAll() {
        return this.service.getAll();
    }
}
