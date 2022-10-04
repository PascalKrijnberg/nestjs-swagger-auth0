import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
  constructor() {

  }

  async validate(payload: any): Promise<any> {
    console.log(payload);
  }
}
