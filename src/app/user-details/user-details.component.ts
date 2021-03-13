import {Component, OnInit} from '@angular/core';
import {Customer} from '../../types/customer';
import {CustomerService} from '../../services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {VehicleService} from '../../services/vehicle.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  public isEditClick: boolean = false;
  private id: string | null = null;
  public provinceHasError = true;

  public provinces: string[] = ['Central Province', 'Eastern Province', 'Sabaragamuwa Province', 'Uva Province', 'North Central Province',
    'North Western Province', 'Western Province', 'Southern Province', 'Northern Province'];

  public userModel: Customer = new Customer('', '', '', '', '', '', '', '', '',
    '');

  public validateProvince(value: string): void {
    if (value === 'default') {
      this.provinceHasError = true;
    } else {
      this.provinceHasError = false;
    }
  }

  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router, private vehicleService: VehicleService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.customerService.customerDetails(this.id).subscribe(data => console.log(this.userModel = data));
  }

  onEdit(): void {
    this.isEditClick = !this.isEditClick;
  }

  onSave(): void {
    this.customerService.updateCustomer(this.id, this.userModel).subscribe(data => console.log(data));
  }

  onDelete(): void {
    this.customerService.deleteCustomer(this.id).subscribe(data => console.log(data));
    this.vehicleService.deleteAllVehiclesById(this.id).subscribe(data => console.log(data));
    this.router.navigate(['home']);

  }
}
