import { Body, Controller, Delete, Post } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { AdicionarCarrinhoDto } from './adicionar-carrinho.dto';
import { CarrinhoService } from './carrinho.service';
import { DeletarCarrinhoDto } from './deletar-carrinho.dto';

@ApiTags('carrinho')
@Controller('carrinho')
export class CarrinhoController {
  constructor(private readonly carrinhoService: CarrinhoService) {}

  @Post('adicionar')
  @ApiResponse({ status: 201, description: 'Produto adicionado ao carrinho com sucesso' })
  @ApiResponse({ status: 404, description: 'Produto não encontrado' })
  async adicionarProduto(@Body() dto: AdicionarCarrinhoDto): Promise<void> {
    await this.carrinhoService.adicionarProduto(dto);
  }

  @Delete('remover')
  @ApiResponse({ status: 200, description: 'Produto removido do carrinho com sucesso' })
  @ApiResponse({ status: 404, description: 'Item no carrinho não encontrado' })
  async deletarProduto(@Body() dto: DeletarCarrinhoDto): Promise<void> {
    await this.carrinhoService.deletarProduto(dto);
  }
}
