import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Vehicle} from '../../types/vehicle';
import {VehicleService} from '../../services/vehicle.service';

@Component({
  selector: 'app-new-vehi-form',
  templateUrl: './new-vehi-form.component.html',
  styleUrls: ['./new-vehi-form.component.scss']
})
export class NewVehiFormComponent implements OnInit {

  private id: string | null = null;
  vehicleModel = new Vehicle('', '', '', '', '', '', '', '', '',
    '', '');

  constructor(private route: ActivatedRoute, private regVehicle: VehicleService, private router: Router) {
  }

  onSubmit(): void {
    this.vehicleModel.userId = this.id ? this.id : '';
    this.regVehicle.newVehicle(this.vehicleModel).subscribe((data => console.log('Sucess!', data)),
      (error: any) => console.log('error', error));
    this.router.navigate(['/vehi_list', this.id]);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
