import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@app/_models';
import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentUser: User;
  nomeUsuario: string;

  ngOnInit(): void {
  }

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      this.nomeUsuario=this.currentUser.userExists.nome;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  abrirSidebar(el: any){
    var display = document.getElementById(el).style.display;
    console.log("display",display)
    if(display == "none"){
      document.getElementById(el).style.display = 'block';
      document.getElementById("sidebarGlobal").style.height = '100%';
      document.getElementById("sidebarGlobal").style.backgroundColor = "#FFECE5";
    }
    else{
      document.getElementById(el).style.display = 'none';
      document.getElementById("sidebarGlobal").style.height = 'min-content';
      document.getElementById("sidebarGlobal").style.backgroundColor = "#FFF8F5";
    }
  }
}
