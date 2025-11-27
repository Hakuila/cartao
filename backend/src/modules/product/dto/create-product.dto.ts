import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  price: number;

  @IsUUID()
  storeId: string;
}
