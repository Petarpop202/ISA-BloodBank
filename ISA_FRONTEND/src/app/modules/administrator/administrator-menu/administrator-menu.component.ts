import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-administrator-menu',
  templateUrl: './administrator-menu.component.html',
  styleUrls: ['./administrator-menu.component.css']
})
export class AdministratorMenuComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }
  logout = () =>
  {
    this.loginService.logout();
  }
}
