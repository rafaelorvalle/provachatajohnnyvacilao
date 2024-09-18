import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';

export class AdicionarCarrinhoDto {
  @ApiProperty({ description: 'ID do produto a ser adicionado ao carrinho' })
  @IsInt()
  @IsPositive()
  produto_id: number;

  @ApiProperty({ description: 'Quantidade do produto a ser adicionada ao carrinho' })
  @IsInt()
  @IsPositive()
  quantidade: number;
}
