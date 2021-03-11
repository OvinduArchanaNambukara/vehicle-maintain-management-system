import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {VehicleService} from '../../services/vehicle.service';
import {Vehicle} from '../../types/vehicle';

@Component({
  selector: 'app-vehi-list',
  templateUrl: './vehi-list.component.html',
  styleUrls: ['./vehi-list.component.scss']
})
export class VehiListComponent implements OnInit {

  private id: string | null = null;

  public vehicles: Vehicle[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private vehicleService: VehicleService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.vehicleService.getVehicleList(this.id).subscribe(data => console.log(this.vehicles = data));
  }

  onCardClick(regNo: string): void {
    this.router.navigate(['/vehi_details', this.id, regNo]);
  }

  onAddClick(): void {
    this.router.navigate(['/new_vehi', this.id]);
  }

}
