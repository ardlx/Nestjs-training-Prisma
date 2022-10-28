import { Module } from '@nestjs/common';
import { ProductModule } from './products/modules/products.module';
import { PrismaModule } from './prisma/prisma.module';
//main module of the app that will import other modules 
@Module({
  imports: [ProductModule, PrismaModule],

})
export class AppModule {}
