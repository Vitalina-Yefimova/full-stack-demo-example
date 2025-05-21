import { Controller, Get, Post, Patch, Put, Delete, Param, Body, Query } from "@nestjs/common";
import { InputsService } from './inputs.service'

@Controller('inputs')
export class InputsController {
  constructor(private readonly inputsService: InputsService) {}

  @Get()
  findAll(@Query('fields') fields?: string) {
    return this.inputsService.findAll(fields)
  }

  @Post('one')
  insertOne(@Body() body: any) {
    return this.inputsService.insertOne(body)
  }

  @Post('many')
  insertMany(@Body() body: any[]) {
    return this.inputsService.insertMany(body);
  }

  @Patch('update-one/:id')
  updateOne(@Param('id') id: string, @Body() body: any) {
    return this.inputsService.updateOne(id, body);
  }

  @Patch('update-many')
  updateMany(@Body() body: { filter: any; update: any }) {
    return this.inputsService.updateMany(body.filter, body.update);
  }

  @Put('replace/:id')
  replaceOne(@Param('id') id: string, @Body() body: any) {
    return this.inputsService.replaceOne(id, body);
  }

  @Delete('delete-one/:id')
  deleteOne(@Param('id') id: string) {
    return this.inputsService.deleteOne(id);
  }

  @Delete('delete-many')
  deleteMany(@Body() filter: any) {
    return this.inputsService.deleteMany(filter);
  }
}
  
