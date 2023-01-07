import { Coffee } from 'core/domain/Coffee/Coffee';

export interface ICoffeeRepository {
  addCoffee(): Promise<void>;
  removeCoffee(): Promise<void>;
  getCoffees(): Promise<Coffee[]>;
  getCoffe(): Promise<Coffee>;
}
