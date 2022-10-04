import { Module } from '@nestjs/common';
import { CoffeeModule } from './coffees/coffee.module';
import { ConfigModule } from "@nestjs/config";
import { AccountModule } from "./account/account.module";

@Module({
  imports: [
      ConfigModule.forRoot({
      isGlobal: true,
    }),
    CoffeeModule,
    AccountModule
  ],
})
export class AppModule {}
