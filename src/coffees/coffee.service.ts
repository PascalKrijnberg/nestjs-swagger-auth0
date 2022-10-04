import { Injectable } from '@nestjs/common';
import { Coffee } from './interfaces/coffee.interface';

@Injectable()
export class CoffeeService {
  private readonly coffees: Coffee[] = [
    {
      name: "Americano"
    },
    {
      name: 'Brewed Coffee',
    },
    {
      name: 'Cappuccino',
    },
    {
      name: 'Espresso Shot',
    },
    {
      name: 'Flat White',
    },
    {
      name: 'Latte',
    },
    {
      name: 'Macchiato',
    },
    {
      name: 'Mocha',
    }
  ];

  async create(coffee: Coffee): Promise<Coffee> {
    this.coffees.push(coffee);
    return coffee;
  }

  findAll(): Coffee[] {
    return this.coffees;
  }
}
