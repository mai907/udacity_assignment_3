import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Product} from '../models/Product'
import {CartElemnt} from '../models/Cart'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product
  @Output() addToCart: EventEmitter<CartElemnt> = new EventEmitter;

  quantity?:number = 1
  constructor(){
    this.product={
      id :1,
      name:"",
      price:0,
      description:"",
      url:""
    }
  }

  addtoCart(pordect:Product):void {
    this.addToCart.emit({...pordect,quantity:Number(this.quantity!)});
  }

}
