import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';

export class DeletarCarrinhoDto {
  @ApiProperty({ description: 'ID do produto no carrinho a ser removido' })
  @IsInt()
  @IsPositive()
  id: number;
}
