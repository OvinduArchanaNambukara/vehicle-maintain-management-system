import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../types/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseURL = 'http://localhost:8080/api/customer';

  constructor(private httpClient: HttpClient) {
  }

  newCustomer(customer: Customer): Observable<any> {
    return this.httpClient.post(this.baseURL + '/create', customer);
  }

  customerDetails(id: string | null): Observable<Customer> {
    return this.httpClient.get<Customer>(this.baseURL + '/' + id);
  }

  updateCustomer(id: string | null, updatedCustomer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(this.baseURL + '/' + id + '/update', updatedCustomer);
  }
}
