import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  public provinces: string[] = ['Central Province', 'Eastern Province', 'Sabaragamuwa Province', 'Uva Province', 'North Central Province',
                                'North Western Province', 'Western Province', 'Southern Province', 'Northern Province'];


  constructor() {
  }

  ngOnInit()
    :
    void {
  }
}
