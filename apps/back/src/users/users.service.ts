import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany();
  }
  
  create(data: { name: string; email: string }) {
    return this.prisma.user.create({ data });
  }

  delete(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
