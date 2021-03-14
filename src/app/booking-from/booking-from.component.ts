import {Component, OnInit} from '@angular/core';
import {CreditCard} from '../../types/creditCard';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../services/customer.service';
import {Customer} from '../../types/customer';
import {BookingsService} from '../../services/bookings.service';
import {Bookings} from '../../types/bookings';
import {getLocaleTimeFormat} from '@angular/common';

@Component({
  selector: 'app-booking-from',
  templateUrl: './booking-from.component.html',
  styleUrls: ['./booking-from.component.scss']
})
export class BookingFromComponent implements OnInit {

  private id: string | null = null;
  public bookingModel: CreditCard = new CreditCard('', '', '', '', '', '', '');
  public firstDigit: number | null = null;
  public customer: Customer = new Customer('', '', '', '', '', '', '', '', '', '');
  public bookings: Bookings = new Bookings('', '', '', '', '', '');

  constructor(private route: ActivatedRoute, private customerService: CustomerService, private bookingService: BookingsService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.customerService.customerDetails(this.id).subscribe(data => this.customer = data);
  }

  onChange(): void {
    this.firstDigit = parseInt((this.bookingModel.CardN0Field1[0]));
  }

  onSubmit(): void {
    this.bookings.userId = this.id ? this.id : '';
    this.bookings.name = this.customer.firstName + ' ' + this.customer.lastName;
    this.bookings.tel = this.customer.telephone;
    this.bookings.paid = 'Rs 1500';
    let date = new Date();
    this.bookings.bookedDate = String(date.getFullYear()) + '/' + String(date.getMonth()) + '/' + String(date.getDate());
    this.bookings.bookedTime = String(date.getHours()) + '.' + String(date.getMinutes());
    this.bookingService.newBooking(this.bookings).subscribe(data => console.log(data));
  }

  OnlyNumberAccept(event: any): boolean {
    const charcode = (event.which) ? event.which : event.keyCode;
    if (charcode > 32 && (charcode < 48 || charcode > 57)) {
      return false;
    }
    return true;
  }
}
