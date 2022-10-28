import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { ProductController } from "../controllers/products.controller";
import { ProductService } from "../services/products.service";

@Module({
    imports: [PrismaModule],
    controllers: [ProductController],
    providers:[ProductService]
})

//use export so other file can use class
export class ProductModule {}