import {Component, OnInit} from '@angular/core';
import {CreditCard} from '../../types/creditCard';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../services/customer.service';
import {Customer} from '../../types/customer';

@Component({
  selector: 'app-booking-from',
  templateUrl: './booking-from.component.html',
  styleUrls: ['./booking-from.component.scss']
})
export class BookingFromComponent implements OnInit {

  public bookingModel: CreditCard = new CreditCard('', '', '', '', '', '', '');
  public firstDigit: number | null = null;
  public customer: Customer = new Customer('', '', '', '', '', '', '', '', '', '');

  constructor(private route: ActivatedRoute, private customerService: CustomerService) {
  }

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    this.customerService.customerDetails(id).subscribe(data => this.customer = data);
  }

  onChange(): void {
    this.firstDigit = parseInt((this.bookingModel.CardN0Field1[0]));

  }

  OnlyNumberAccept(event: any): boolean {
    const charcode = (event.which) ? event.which : event.keyCode;
    if (charcode > 32 && (charcode < 48 || charcode > 57)) {
      return false;
    }
    return true;
  }
}
