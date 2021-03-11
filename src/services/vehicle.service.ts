import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vehicle} from '../types/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private baseURL = 'http://localhost:8080/api/vehicle';

  constructor(private httpClient: HttpClient) {
  }

  newVehicle(vehicle: Vehicle): Observable<any> {
    return this.httpClient.post<Vehicle>(this.baseURL + '/create', vehicle);
  }

  getVehicleList(id: string | null): Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>(this.baseURL + '/' + id);
  }
}