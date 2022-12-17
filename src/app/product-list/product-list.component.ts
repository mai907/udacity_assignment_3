import { Component } from '@angular/core';
import {Product} from '../models/Product'
import { CartService } from '../services/cart.service';
import {ProductService} from '../services/product.service'
import { CartElemnt } from '../models/Cart';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [];
  cart: Product[] = [];
  constructor(
    private productService: ProductService,private cartService:CartService){}
  ngOnInit() {
 this.productService.getProducts().subscribe(products => this.products = products)
  }
  addToCart(pordect:CartElemnt):void{
    this.cartService.addToCartList(pordect)

  }

  

}
