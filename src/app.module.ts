import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ImageModule } from './image/image.module';
import { ConfigModule } from '@nestjs/config';

console.log('DB_CONNECTION_STRING in AppModule:', process.env.DB_CONNECTION_STRING);

@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.DB_CONNECTION_STRING?.trim()}`, {dbName: 'db_pagination'}), //the error lies here
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true
    }),
    ImageModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
