import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ImagesModule } from './modules/images/images.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/db_pagination'), ImagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
