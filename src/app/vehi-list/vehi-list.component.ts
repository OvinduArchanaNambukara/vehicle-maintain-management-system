import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-vehi-list',
  templateUrl: './vehi-list.component.html',
  styleUrls: ['./vehi-list.component.scss']
})
export class VehiListComponent implements OnInit {

  private id: string | null = null;

  public vehicles = [
    {
      Reg_no: 'CAD-6025',
      Chassis_no: 'NKE155JK482',
      Engine_no: 'HKO45481226'
    },
    {
      Reg_no: 'CLK-4853',
      Chassis_no: 'KLE44521',
      Engine_no: 'HKO45481226'
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  onClick():void {
    this.router.navigate(['/new_vehi', this.id]);
  }

}
