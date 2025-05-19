import { TemplateService } from "./templates.service";
import { Controller, Get, Post, Delete, Body, Param } from "@nestjs/common";

@Controller('templates')
export class TemplatesController {
  constructor(private readonly templatesService: TemplateService) { }
  
  @Get()
  getTemplates() {
    return this.templatesService.findAll();
  }
  
  @Post()
  createTemplate(@Body() body: any) {
    return this.templatesService.create(body);
  }

  @Delete(':id')
  deleteTemplate(@Param('id') id: string) {
    return this.templatesService.delete(id);
  }
}