import { Controller, Get, Post, Delete, Body, Param } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }
  
  @Get()
  getUsers() {
    return this.usersService.findAll()
  }

  @Post()
  create(@Body() body: { name: string; email: string }) {
    return this.usersService.create(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(Number(id));
  }
}