import {Component, OnInit} from '@angular/core';
import {RegCustomerService} from '../../services/reg-customer.service';
import {Customer} from '../../types/customer';
import * as uuid from 'uuid';
import {VehicleService} from '../../services/vehicle.service';
import {Vehicle} from '../../types/vehicle';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  public provinceHasError = true;
  public provinces: string[] = ['Central Province', 'Eastern Province', 'Sabaragamuwa Province', 'Uva Province', 'North Central Province',
    'North Western Province', 'Western Province', 'Southern Province', 'Northern Province'];

  userModel = new Customer('', '', '', '', '', '', '', '', '', '');
  vehicleModel = new Vehicle('', '', '', '', '', '', '', '', '',
    '', '');

  public validateProvince(value: string): void {
    if (value === 'default') {
      this.provinceHasError = true;
    } else {
      this.provinceHasError = false;
    }
  }

  onSubmit(): void {
    this.userModel.id = uuid.v4();
    this.vehicleModel.userId = this.userModel.id;

    this.regService.newCustomer(this.userModel).subscribe((data => console.log('Sucess!', data)),
      (error: any) => console.log('error', error));

    this.regVehicle.newVehicle(this.vehicleModel).subscribe((data => console.log('Sucess!', data)),
      (error: any) => console.log('error', error));

    this.router.navigate(['/interface', this.userModel.id]);

  }

  constructor(private regService: RegCustomerService, private regVehicle: VehicleService, private router: Router) {
  }

  ngOnInit(): void {

  }

}
