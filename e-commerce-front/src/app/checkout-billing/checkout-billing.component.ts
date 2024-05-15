import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout-billing',
  templateUrl: './checkout-billing.component.html',
  styleUrls: ['./checkout-billing.component.css']
})
export class CheckoutBillingComponent {

  selectedPaymentMethod: string = 'card';

  constructor() {}

  // Method to update selected payment method
  updatePaymentMethod(method: string): void {
    this.selectedPaymentMethod = method;
  }

}
