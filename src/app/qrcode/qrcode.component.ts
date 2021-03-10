import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent implements OnInit {

  private id: string | null = null;
  public myAngularxQrCode: string = '';

  private onGenerateCode(): void {
    this.myAngularxQrCode = this.id ? this.id : '';
  }

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.onGenerateCode();
  }

}
