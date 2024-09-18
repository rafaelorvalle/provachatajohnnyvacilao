import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { AdicionarCarrinhoDto } from './adicionar-carrinho.dto';
import { DeletarCarrinhoDto } from './deletar-carrinho.dto';

@Injectable()
export class CarrinhoService {
  constructor(private readonly prisma: PrismaService) {}

  async adicionarProduto(dto: AdicionarCarrinhoDto): Promise<void> {
    const { produto_id, quantidade } = dto;

    const produto = await this.prisma.produtos.findUnique({
      where: { id: produto_id },
    });

    if (!produto) {
      throw new NotFoundException(`Produto com ID ${produto_id} não encontrado`);
    }

    await this.prisma.carrinho.create({
      data: {
        produto_id,
        quantidade,
      },
    });
  }

  async deletarProduto(dto: DeletarCarrinhoDto): Promise<void> {
    const { id } = dto;

    const item = await this.prisma.carrinho.findUnique({
      where: { id },
    });

    if (!item) {
      throw new NotFoundException(`Item no carrinho com ID ${id} não encontrado`);
    }

    await this.prisma.carrinho.delete({
      where: { id },
    });
  }
}
