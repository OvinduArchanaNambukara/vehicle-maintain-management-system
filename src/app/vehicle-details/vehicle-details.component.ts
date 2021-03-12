import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Vehicle} from '../../types/vehicle';
import {Customer} from '../../types/customer';
import {VehicleService} from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {


  public isEditClick:boolean=false;
  private id: string | null = null;
  private regNo: string | null = null;

  public vehicleModel: Vehicle = new Vehicle('', '', '', '', '', '', '', '',
    '', '', '');

  constructor(private route: ActivatedRoute, private vehicleService: VehicleService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.regNo = this.route.snapshot.paramMap.get('reg_no');
    this.vehicleService.getVehicleDetails(this.id, this.regNo).subscribe(data => console.log(this.vehicleModel = data));
  }

  onEditButtonClick(){
   this.isEditClick=!this.isEditClick;
  }

}
