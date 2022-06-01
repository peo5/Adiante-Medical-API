import { Injectable } from '@nestjs/common';

// TODO: separate medic class

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  getAlt(): string {
    return 'This is an alternative endpoint!';
  } 

}
