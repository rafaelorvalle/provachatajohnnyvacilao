import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { PrismaService } from '../../prisma/prisma.service';
import { CarrinhoModule } from './carrinho/carrinho.module';

@Module({
  imports: [ProdutosModule,CarrinhoModule],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}
