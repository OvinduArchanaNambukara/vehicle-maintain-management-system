import {Component, ViewChild, ViewEncapsulation, OnInit} from '@angular/core';
import {QrScannerComponent} from 'angular2-qrscanner';
import {Router} from '@angular/router';


@Component({
  selector: 'app-qr-code-scanner',
  templateUrl: './qr-code-scanner.component.html',
  styleUrls: ['./qr-code-scanner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class QrCodeScannerComponent implements OnInit {

  // @ts-ignore
  @ViewChild(QrScannerComponent, {static: false}) qrScannerComponent: QrScannerComponent;

  scanButtonClick = true;
  accountLink = '';

  public isScanButtonClick = () => {
    if (this.scanButtonClick) {
      this.scanButtonClick = !this.scanButtonClick;
      this.camaraON();
    }
  };

  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }

  onClickLink(){
    this.router.navigate(['/interface',this.accountLink])
  }

  camaraON(): void {
    this.qrScannerComponent.getMediaDevices().then(devices => {
      console.log(devices);
      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
        if (device.kind.toString() === 'videoinput') {
          videoDevices.push(device);
        }
      }
      if (videoDevices.length > 0) {
        let choosenDev;
        for (const dev of videoDevices) {
          if (dev.label.includes('front')) {
            choosenDev = dev;
            break;
          }
        }
        if (choosenDev) {
          this.qrScannerComponent.chooseCamera.next(choosenDev);
        } else {
          this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
        }
      }
    });

    this.qrScannerComponent.capturedQr.subscribe(result => {
      console.log(result);
      this.accountLink = result;
    });
  }

}
