import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Vehicle} from '../../types/vehicle';
import {VehicleService} from '../../services/vehicle.service';


@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {


  public isEditClick: boolean = false;
  private id: string | null = null;
  private regNo: string | null = null;

  public vehicleModel: Vehicle = new Vehicle('', '', '', '', '', '', '', '',
    '', '', '');

  constructor(private route: ActivatedRoute, private vehicleService: VehicleService,private router:Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.regNo = this.route.snapshot.paramMap.get('reg_no');
    this.vehicleService.getVehicleDetails(this.id, this.regNo).subscribe(data => console.log(this.vehicleModel = data));
  }

  onEdit(): void {
    this.isEditClick = !this.isEditClick;
  }

  onDelete(): void {
    this.vehicleService.deleteVehicle(this.id, this.regNo).subscribe(data => console.log(data));
    setTimeout(()=>this.router.navigate(['/vehi_list', this.id]),1000);

  }

  onSave(): void {
    this.vehicleService.updateVehicle(this.vehicleModel, this.id, this.regNo).subscribe(data => console.log(this.vehicleModel = data));
    this.router.navigate(['/vehi_list', this.id]);
  }
}
