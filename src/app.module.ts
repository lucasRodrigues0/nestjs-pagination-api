import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ImageModule } from './image/image.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017', {dbName: 'db_pagination'}), 
    ImageModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
