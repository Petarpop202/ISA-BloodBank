import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-blood-donor-menu',
  templateUrl: './blood-donor-menu.component.html',
  styleUrls: ['./blood-donor-menu.component.css']
})
export class BloodDonorMenuComponent implements OnInit {

  constructor(private router : Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  logout = () =>
  {
    this.loginService.logout();
  }
}
