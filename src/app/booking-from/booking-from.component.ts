import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-booking-from',
  templateUrl: './booking-from.component.html',
  styleUrls: ['./booking-from.component.scss']
})
export class BookingFromComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  OnlyNumberAccept(event: any): boolean {
    const charcode = (event.which) ? event.which : event.keyCode;
    if (charcode > 32 && (charcode < 48 || charcode > 57)) {
      return false;
    }
    return true;
  }
}
