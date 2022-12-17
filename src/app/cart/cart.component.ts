import { Component } from '@angular/core';
import { CartElemnt, Request } from '../models/Cart';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  fullName: string = '';
  address: string = '';
  creditCardNumber: string = '';
  quantity: number = 0;
  cartList: CartElemnt[] = [];
  total: number = 0;
  constructor(private cartService: CartService, private router: Router) {
    this.cartList = this.cartService.getCartList();
    this.total = this.cartService.getTotal();
  }

  ngAfterViewInit() {
    const credit: any = document.getElementById('credit');
    credit?.addEventListener('input', (e: any) => {
      var pattern = /^\d+\.?\d*$/;
      if (pattern.test(e?.data)) {
        this.creditCardNumber = credit?.value;
      } else {
        credit.value = this.creditCardNumber;
      }
    });
  }

  submitForm(): void {
    const request: Request = {
      fullName: this.fullName,
      address: this.address,
      creditCardNumber: this.creditCardNumber,
      total: this.total,
    };
    this.cartService.addSubmitRequest(request);
    this.router.navigate(['confirmation']);
  }

  changeQuantity(index: string, cartElemnt: CartElemnt): void {
    if (Number(index) == 0) {
      this.cartService.removeFromCartList(cartElemnt);
    }
    this.total = this.cartService.getTotal();
  }
}
