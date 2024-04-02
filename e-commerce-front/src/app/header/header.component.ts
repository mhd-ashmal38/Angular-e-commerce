import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItemCount: number = 0;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getCartItemsCount();
  }

  getCartItemsCount(): void {
    this.api.getAllCarts().subscribe((data: any) => {
      this.cartItemCount = data.length;
    });
  }
}
