import { Module } from '@nestjs/common';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ImageSchema } from 'src/schemas/image.schema';
import { Image } from 'src/schemas/image.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Image.name, schema: ImageSchema}])],
  controllers: [ImageController],
  providers: [ImageService]
})
export class ImageModule {}
