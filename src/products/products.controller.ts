import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProductDto } from './dto/products.dto';
import { Product } from './interface/products.interface';
import { ProductsService } from './products.service';

// lo que pongo en el controller es la ruta, en este caso /products
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {
    this.productService = productService;
  }

  @Get()
  getProducts(): Product[] {
    return this.productService.getProducts();
  }

  @Post()
  createProduct(@Body() product: ProductDto): Product[] {
    return this.productService.createProduct(product);
  }
}
