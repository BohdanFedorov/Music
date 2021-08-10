import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { ContentsController } from './contents.controller';
import { ContentsService } from './contents.service';
import { Contents, ContentsSchema } from './schema/content.schema';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploadContentStorage'
    }),
    MongooseModule.forFeature([{ name: Contents.name, schema: ContentsSchema }])],
  controllers: [ContentsController],
  providers: [ContentsService]
})
export class ContentsModule { }
