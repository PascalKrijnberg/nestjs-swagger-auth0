import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { CoffeeService } from './coffee.service';
import { Coffee } from './interfaces/coffee.interface';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CoffeeDto } from "./dto/coffee.dto";
import { JwtAuthGuard } from "../account/guards/jwt-auth.guard";

@ApiTags('Coffee Selection')
@Controller('coffee')
export class CoffeeController {
  constructor(private readonly catsService: CoffeeService) {}

  @Get()
  @ApiBearerAuth('Auth0')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary:
      'Returns all available coffee types for this machine.'
  })
  @ApiResponse({
    status: 200,
    description:
      'Returns all available coffee types for this machine.',
    type: [CoffeeDto],
  })
  async findAll(): Promise<Coffee[]> {
    return this.catsService.findAll();
  }

  @Post()
  @ApiBearerAuth('Auth0')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: 'Add a new coffee type to the machine.',
  })
  @ApiResponse({
    status: 200,
    description: 'Return the freshly created coffee type.',
    type: CoffeeDto,
  })
  async create(@Body() dto: CoffeeDto): Promise<Coffee> {
    return this.catsService.create(dto);
  }
}
