import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InputsSchema } from './inputs.schema';
import { InputsService } from './inputs.service';
import { InputsController } from './inputs.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Input', schema: InputsSchema }])],
  controllers: [InputsController],
  providers: [InputsService],
})
export class InputsModule {}