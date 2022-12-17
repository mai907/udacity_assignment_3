import { Component} from '@angular/core';
import { Router } from '@angular/router';
import {Product} from "../models/Product"
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent {
  productDetails:Product ={
    id :1,
    name:"",
    price:0,
    description:"",
    url:""
  }
  quantity?:number = 1
  router: any;

  constructor(private route: Router,
    private cartService:CartService) { 
    const navigation = this.route.getCurrentNavigation();
     const value = navigation?.extras.state ;
     this.productDetails = value as Product;
    
 }

  ngOnInit(){
    console.log(";asdl;sl",this.productDetails)
  }

  addToCart(pordect:Product):void{
    this.cartService.addToCartList({...pordect,quantity:Number(this.quantity!)})
  }
  
}
