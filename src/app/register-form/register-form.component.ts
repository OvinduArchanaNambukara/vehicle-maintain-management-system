import {Component, OnInit} from '@angular/core';
import {RegCustomerService} from '../../services/reg-customer.service';
import {Customer} from '../../customer';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  public provinceHasError = true;

  public provinces: string[] = ['Central Province', 'Eastern Province', 'Sabaragamuwa Province', 'Uva Province', 'North Central Province',
    'North Western Province', 'Western Province', 'Southern Province', 'Northern Province'];

  userModel = new Customer('KBB', '', '', '', '', '', '', '', '', '');

  public validateProvince(value: string): void {
    if (value === 'default') {
      this.provinceHasError = true;
    } else {
      this.provinceHasError = false;
    }
  }

  onSubmit(): void {
    this.regService.newCustomer(this.userModel).subscribe((data => console.log('Sucess!', data)),
      (error: any) => console.log('error', error));
  }

  constructor(private regService: RegCustomerService) {
  }

  ngOnInit(): void {
  }


}
