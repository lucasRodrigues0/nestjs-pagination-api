import { Injectable } from '@nestjs/common';

@Injectable()
export class ImageService {

    getAll() {
        return 'getting all images!';
    }
}
