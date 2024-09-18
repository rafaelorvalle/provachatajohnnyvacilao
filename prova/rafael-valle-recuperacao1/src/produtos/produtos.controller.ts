import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { ProdutosService } from './produtos.service';
import { ProdutoDto } from './produto.dto';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Lista todos os produtos', type: [ProdutoDto] })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
  async findAll(): Promise<ProdutoDto[]> {
    return this.produtosService.findAll();
  }
}
