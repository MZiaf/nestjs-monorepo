import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaClient) {}

  async getHello(): Promise<{ title: string; body: string }> {
    const user = await this.prisma.user.create({
      data: {
        name: 'ziaf',
        email: 'ziaf@prisma.io',
      },
    });
    console.log(user);
    return { title: 'projectA', body: 'projectA' };
  }
}
