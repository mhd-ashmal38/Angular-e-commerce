import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
  cartItems:any=[]
  subtotal: number = 0; // Initialize subtotal variable
  shippingCost: number = 4.99; // Set the shipping cost

  constructor(private api:ApiService){}

  ngOnInit():void{
    this.getCartItems()
  }

  getCartItems=()=>{
    this.api.getAllCarts().subscribe((data:any)=>{
      this.cartItems=data
      console.log(this.cartItems);
      
      this.calculateSubtotal()
    })
  }

  // Increment quantity
  incrementQuantity(cartItem: any): void {
    cartItem.quantity++;
    this.calculateSubtotal()
  }

  // Decrement quantity
  decrementQuantity(cartItem: any): void {
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
      this.calculateSubtotal()
    }
  }

  // Calculate subtotal
calculateSubtotal(): void {
  this.subtotal = this.cartItems.reduce((acc: number, item: any) => {
    return acc + (item.price * item.quantity);
  }, 0);
}

// Calculate total
calculateTotal(): number {
  return this.subtotal + this.shippingCost;
}

  // delete cart item
  deleteCartItem(id:any){
    this.api.deleteCartItems(id).subscribe({
      next:(res:any)=>{
        this.getCartItems()
        
      },
      error:(err:any)=>{
        alert('cannot perform action now')
      }
    })
  }

}
