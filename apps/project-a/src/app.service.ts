import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async getHello(): Promise<{ name: string; email: string }> {
    let user;
    user = await this.prisma.user.findFirst({
      where: {
        name: 'ziaf',
      },
    });

    if (!user) {
      user = await this.prisma.user.create({
        data: { name: 'ziaf', email: 'ziaf@retailo.co' },
      });
    }

    return { name: user.name, email: user.email };
  }
}
