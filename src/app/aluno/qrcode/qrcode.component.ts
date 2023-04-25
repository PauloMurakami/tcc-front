import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.less']
})
export class QrcodeComponent implements OnInit {
  userID;
  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    const currentUser = this.authenticationService.currentUserValue;
    this.userID = currentUser.userExists.id 
  }

}
