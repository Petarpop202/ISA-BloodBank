import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-medicine-staff-menu',
  templateUrl: './medicine-staff-menu.component.html',
  styleUrls: ['./medicine-staff-menu.component.css']
})
export class MedicineStaffMenuComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  logout = () =>
  {
    this.loginService.logout();
  }
}
