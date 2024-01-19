import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Updated and installign nvm and pm2 everytime ci cd!';
  }
}
