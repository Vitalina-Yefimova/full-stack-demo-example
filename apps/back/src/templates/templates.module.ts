import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TemplateService } from './templates.service';
import { TemplateSchema } from './templates.schema';
import { TemplatesController } from './templates.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Template', schema: TemplateSchema }])
  ],
  controllers: [TemplatesController],
  providers: [TemplateService],
})
export class TemplateModule {}
