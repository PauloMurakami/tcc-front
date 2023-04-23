import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import {
  ScannerQRCodeConfig,
  ScannerQRCodeResult,
  NgxScannerQrcodeService,
  NgxScannerQrcodeComponent,
  ScannerQRCodeSelectedFiles,
} from 'ngx-scanner-qrcode';
import { delay } from 'rxjs/internal/operators';


@Component({
  selector: 'app-scann',
  templateUrl: './scann.component.html',
  styleUrls: ['./scann.component.css']
})
export class ScannComponent implements AfterViewInit {


  // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#front_and_back_camera
  public config: ScannerQRCodeConfig = {
    // fps: 1000,
    // decode: 'macintosh',
    deviceActive: 1, // camera front: deviceActive=0  // back camera: deviceActive=1
    constraints: {
      facingMode: "environment", // 'user' (front camera), and 'environment' (back camera). 
      audio: false,
      video: {
        width: window.innerWidth // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
      }
    }
  };

  public qrCodeResult: ScannerQRCodeSelectedFiles[] = [];
  public qrCodeResult2: ScannerQRCodeSelectedFiles[] = [];

  @ViewChild('action') action: NgxScannerQrcodeComponent;


  constructor(private router: Router, private qrcode: NgxScannerQrcodeService) { }

  ngAfterViewInit(): void {
    this.action.isReady.pipe(delay(3000)).subscribe(() => {
      this.action
    });
  }

  public onEvent(e: ScannerQRCodeResult[]): void {
    console.log(e[0].value);
    this.router.navigate(['/'])
  }

  public handle(action: NgxScannerQrcodeComponent, fn: string): void {
    action[fn]().subscribe(console.log, alert);
  }
}
