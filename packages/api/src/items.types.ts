import { IsInt } from 'class-validator';

export class ProductInput {
  @IsInt()
  id: number;
}
