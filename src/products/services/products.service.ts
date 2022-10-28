import { Injectable } from '@nestjs/common'
import { CreateProductDto } from '../dto/create-product.dto'
import { UpdateProductDto } from '../dto/update-product.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { v4 as uuidv4 } from 'uuid'
 
//responsible for handling business logic
@Injectable({})
export class ProductService {
  constructor(private prisma:PrismaService){}

    async insertProduct(data: CreateProductDto) {
      data.prodId = uuidv4()
      return this.prisma.product.create({data})
    }

    getProducts() {
      return this.prisma.product.findMany()
    }
    
    getSingleProduct(prodId: string)  {
      return this.prisma.product.findUnique({where: {
        prodId: prodId
      }})
    }
    
    updateProduct(prodId: string, dto: UpdateProductDto) {
      return this.prisma.product.update({
        where: {
          prodId: prodId
        },
        data : {
          name: dto.name,
          description: dto.description,
          price: dto.price
        }
      })
    }
    
    deleteProduct(prodId: string) {
      return this.prisma.product.delete({where: {
        prodId: prodId
      }
    })
  }
    
}