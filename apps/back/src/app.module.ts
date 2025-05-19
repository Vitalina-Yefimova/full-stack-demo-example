import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { TemplateModule } from './templates/templates.module'

console.log('MONGO URI:', process.env.MONGO_URI);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI ?? ''),
    UsersModule,
TemplateModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
