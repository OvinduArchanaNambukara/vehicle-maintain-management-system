import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Bookings} from '../types/bookings';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  private baseURL = 'http://localhost:8080/api/bookings';

  constructor(private httpClient: HttpClient) {
  }

  newBooking(booking: Bookings): Observable<Bookings> {
    return this.httpClient.post<Bookings>(this.baseURL + '/create', booking);
  }

}
