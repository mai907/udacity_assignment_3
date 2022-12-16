import { Injectable } from '@angular/core';
import { CartElemnt,Request } from '../models/Cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartList: CartElemnt[];
  private request: Request  
  constructor() {
    this.cartList =[]
    this.request ={
      fullName: "",
      address: "",
      creditCardNumber: "",
      total:0 
    }
  }

  addToCartList(cartElement: CartElemnt): void {
    var index = this.cartList.findIndex(
      (element) => element.id == cartElement.id
    );
    if (index > -1) {
      this.cartList[index] = cartElement;
    } else {
      this.cartList.push(cartElement);
    }
    alert('Add to cart!');
  }

  removeFromCartList(cartElement: CartElemnt): void {
    var index = this.cartList.findIndex(
      (element) => element.id == cartElement.id
    );
    if (index > -1) {
      this.cartList.splice(index, 1);
    }

    alert('Removed from cart!');
  }

  getTotal(): number {
    let total: number = 0;
    this.cartList.forEach(
      (element) => (total += element.price * element.quantity)
    );
    return Number(total.toFixed(3));
  }

  getCartList(): CartElemnt[] {
    return this.cartList;
  }

  addSubmitRequest(request: Request){
    this.request=request;
    this.cartList = [];
  }

  getRequest(): Request {
    return this.request;
  }
}
