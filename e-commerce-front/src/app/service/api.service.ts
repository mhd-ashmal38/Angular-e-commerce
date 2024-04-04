import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  SERVER_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }


  // api call to get all products from database
  getAllProducts = () => {
    return this.http.get(`${this.SERVER_URL}/products/all`)
  }

  // api call to get a single product
  viewAproduct = (id: any) => {
    return this.http.get(`${this.SERVER_URL}/product/view/${id}`)
  }

  // api call for register
  registerApi = (user: any) => {
    return this.http.post(`${this.SERVER_URL}/user/register`, user)
  }

  // api for login
  loginApi = (user: any) => {
    return this.http.post(`${this.SERVER_URL}/user/login`, user)
  }

  // API call to add product to cart
  addToCart(product: any, quantity: number) {
    return this.http.post(`${this.SERVER_URL}/cart/add`, { productId: product._id, quantity: quantity, rate: product.price, image: product.image });
  }

  // api call to get all cart items
  getAllCarts = () => {
    return this.http.get(`${this.SERVER_URL}/cart/all`)
  }

  // Delete cart item by ID
  deleteCartItems(id: any) {
    return this.http.delete(`${this.SERVER_URL}/cart/delete/${id}`)
  }

  // add to wishlist
  addToWishlist(product: any) {
    return this.http.post(`${this.SERVER_URL}/wishlist/add`, product);
  }

  // get all wishlist items
  getAllWishlist=()=>{
    return this.http.get(`${this.SERVER_URL}/wishlist/all`)
  }

  // delete wishlist item by Id
  deleteWishlistItems(id:any){
    return this.http.delete(`${this.SERVER_URL}/wishlist/delete/${id}`)
  }

}
