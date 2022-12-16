import { Component } from '@angular/core';
import {Request} from "../models/Cart"
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  request:Request

  constructor(private cartService:CartService){
    this.request={
      fullName: "",
      address: "",
      creditCardNumber: "",
      total:0
    }
  }
  ngOnInit(){
    this.request = this.cartService.getRequest()
  }
}
