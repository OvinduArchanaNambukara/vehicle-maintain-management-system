import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent implements OnInit {

  public myAngularxQrCode = 'Vehicle-MM-System';

  constructor() {
  }

  ngOnInit(): void {
  }
}
