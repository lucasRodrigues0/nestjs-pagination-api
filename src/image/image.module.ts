import { Module, ValidationPipe } from '@nestjs/common';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ImageSchema } from 'src/schemas/image.schema';
import { Image } from 'src/schemas/image.schema';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [MongooseModule.forFeature([{name: Image.name, schema: ImageSchema}])],
  controllers: [ImageController],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true
      })
    },
    ImageService
  ]
})
export class ImageModule {}
