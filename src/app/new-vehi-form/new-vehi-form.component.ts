import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-new-vehi-form',
  templateUrl: './new-vehi-form.component.html',
  styleUrls: ['./new-vehi-form.component.scss']
})
export class NewVehiFormComponent implements OnInit {

  private id: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }


}
