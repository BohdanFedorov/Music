import { RoomModule } from './Room/room.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './User/schema/user.schema';
import { UserModule } from './User/user.module';
import { Room } from './Room/schema/room.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    UserModule,
    RoomModule
  ],
  controllers: [],
  providers: [User, Room],
})
export class AppModule { }
