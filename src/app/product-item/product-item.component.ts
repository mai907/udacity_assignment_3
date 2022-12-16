import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Product} from '../models/Product'
import {CartService} from "../services/cart.service"

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product
  quantity?:number = 1
  constructor(private cartService:CartService){
    this.product={
      id :1,
      name:"",
      price:0,
      description:"",
      url:""
    }
  }
  addToCart(pordect:Product):void{
    this.cartService.addToCartList({...pordect,quantity:Number(this.quantity!)})
    // console.log("this.cartService",this.cartService.getCartList())
    // console.log("getTotal",this.cartService.getTotal())

  }

}
