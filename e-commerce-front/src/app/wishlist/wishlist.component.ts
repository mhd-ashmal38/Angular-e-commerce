import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

  wishlistItems:any=[]
  quantity: number = 1;

  constructor(private api:ApiService){}

  ngOnInit():void{
    this.getWishlistItems()
  }

  // view wishlist items
  getWishlistItems=()=>{
    this.api.getAllWishlist().subscribe((data:any)=>{
      this.wishlistItems=data
    })
  }

  // delete wishlist items
  deleteWishlistItem(id:any){
    this.api.deleteWishlistItems(id).subscribe({
      next:(res:any)=>{
        this.getWishlistItems()
      },
      error:(er:any)=>{
        alert('Cannot perform action now')
      }
    })
  }

  // add to cart
  addToCart(product: any, quantity: number) {
    // Call your API to add the product to the cart
    this.api.addToCart(product, quantity).subscribe({
      next: (res: any) => {
        // Handle success response
        console.log('Product added to cart:', res);
      },
      error: (err: any) => {
        // Handle error response
        console.error('Error adding product to cart:', err);
      }
    });
  }

}
