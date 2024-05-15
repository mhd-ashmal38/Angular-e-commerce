import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-checkout-confirm',
  templateUrl: './checkout-confirm.component.html',
  styleUrls: ['./checkout-confirm.component.css']
})
export class CheckoutConfirmComponent implements OnInit {

  showModal: boolean = false;
  selectedDelivery: string = 'normal'; // Default to normal as selected
  cartItems:any=[]

  constructor(private api:ApiService) {}

  ngOnInit():void{
    this.getCartItems()
  }

  // Method to toggle the modal
  toggleModal(): void {
    this.showModal = !this.showModal;
  }

  getCartItems=()=>{
    this.api.getAllCarts().subscribe((data:any)=>{
      this.cartItems=data
      console.log(this.cartItems);
    })
  }

  // Method to calculate the total price
  getTotalPrice(): number {
    let totalPrice = 0;

    // Calculate the total price of items in the cart
    for (const cartItem of this.cartItems) {
      totalPrice += cartItem.price;
    }

    // Add delivery charge based on the selected delivery option
    if (this.selectedDelivery === 'normal') {
      totalPrice += 4.99;
    } else if (this.selectedDelivery === 'fast') {
      totalPrice += 7.99;
    }

    return totalPrice;
  }
  

}
