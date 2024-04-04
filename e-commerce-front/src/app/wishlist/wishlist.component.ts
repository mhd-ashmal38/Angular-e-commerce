import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

  wishlistItems:any=[]

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

}
