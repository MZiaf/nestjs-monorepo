import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { title: string; body: string } {
    return { title: 'projectA', body: 'projectA' };
  }
}
