import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { name: string; email: string } {
    return { name: 'projectB', email: 'projectB@retailo.co' };
  }
}
