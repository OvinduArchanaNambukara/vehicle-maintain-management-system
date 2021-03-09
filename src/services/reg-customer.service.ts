import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CustomerInterface} from '../types/types';
import {Observable} from 'rxjs';
import {Customer} from '../customer';

@Injectable({
  providedIn: 'root'
})
export class RegCustomerService {

  private baseURL = 'http://localhost:8080/api/customer/create';

  constructor(private httpClient: HttpClient) {
  }

  newCustomer(customer: Customer): Observable<any> {
    return this.httpClient.post(this.baseURL, customer);
  }
}
