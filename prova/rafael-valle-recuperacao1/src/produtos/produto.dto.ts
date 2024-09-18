import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class ProdutoDto {
  @ApiProperty({ description: 'ID do produto' })
  @IsInt()
  id: number;

  @ApiProperty({ description: 'Nome do produto' })
  @IsString()
  nome: string;

  @ApiProperty({ description: 'Descrição do produto', required: false })
  @IsOptional()
  @IsString()
  descricao?: string;

  @ApiProperty({ description: 'Preço do produto' })
  @IsInt()
  preco: number;

  @ApiProperty({ description: 'Estoque do produto' })
  @IsInt()
  estoque: number;
}
