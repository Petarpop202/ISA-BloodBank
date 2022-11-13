import { Component, OnInit } from '@angular/core';
import { MedicineStaff } from 'src/app/model/medicineStaff';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-medicine-staff-profile',
  templateUrl: './medicine-staff-profile.component.html',
  styleUrls: ['./medicine-staff-profile.component.css']
})
export class MedicineStaffProfileComponent implements OnInit {

  medicineStaff?: MedicineStaff
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getMedicineStaff('1');
  }

  public getMedicineStaff(id:any): void {
    this.userService.getUser(id).subscribe(res => {
      this.medicineStaff = res;
    })
  }

}
