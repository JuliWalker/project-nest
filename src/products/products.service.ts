import { Injectable } from '@nestjs/common';
import { Product } from './interface/products.interface';
import { productsData } from '../db/products.db';
import { ProductDto } from './dto/products.dto';

@Injectable()
export class ProductsService {
  products: Product[] = productsData;

  getProducts() {
    return this.products;
  }

  createProduct(product: ProductDto) {
    const id = this.products[this.products.length - 1].id + 1;
    this.products.push({ ...product, id });
    return this.products;
  }
}
