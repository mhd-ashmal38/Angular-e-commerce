import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  singleproduct: any = {};
  quantity: number = 1;

  constructor(private activated: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {

    this.activated.params.subscribe((data: any) => {
      // console.log(data);
      const { id } = data
      // console.log(id);
      this.getProduct(id)
    })

    this.singleproduct.mainImage = this.singleproduct.img1;


  }

  getProduct = (id: any) => {
    this.api.viewAproduct(id).subscribe({
      next: (res: any) => {
        // console.log(res);
        this.singleproduct = res
        this.singleproduct.mainImage = this.singleproduct.img1;

      },
      error: (err: any) => {
        console.log(err);

      }
    })
  }

  updateMainImage(image: string): void {
    this.singleproduct.mainImage = image;
  }

  // add to cart
  addToCart(product: any, quantity: number) {
    // Call your API to add the product to the cart
    this.api.addToCart(product, quantity).subscribe({
      next: (res: any) => {
        // Handle success response
        console.log('Product added to cart:', res);
        alert('Added to cart')
      },
      error: (err: any) => {
        // Handle error response
        console.error('Error adding product to cart:', err);
      }
    });
  }

  // add to wishlist
  addToWishlist(product: any) {
    const { _id, name, price,stock, img1 } = product; // Assuming _id is the productId
    const wishlistItem = { productId: _id, name, price,stock, img1 };

    this.api.addToWishlist(wishlistItem).subscribe({
      next: (res: any) => {
        console.log('Product added to wishlist:', res);
        alert('Added to Wishlist')
        // Optionally, you can notify the user or update the UI
      },
      error: (err: any) => {
        console.error('Error adding product to wishlist:', err);
        // Handle error response
      }
    });
  }



}
