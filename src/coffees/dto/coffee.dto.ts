import { IsString } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CoffeeDto {
  @IsString()
  @ApiProperty({
    example: 'Espresso',
    description: 'Coffee type',
  })
  readonly name: string;
}
