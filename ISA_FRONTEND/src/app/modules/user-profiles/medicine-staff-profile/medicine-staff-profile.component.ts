import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicineStaff } from 'src/app/model/medicineStaff';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-medicine-staff-profile',
  templateUrl: './medicine-staff-profile.component.html',
  styleUrls: ['./medicine-staff-profile.component.css']
})
export class MedicineStaffProfileComponent implements OnInit {

  id?:string | null;
  medicineStaff?: MedicineStaff
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getMedicineStaff(this.id);
  }

  public getMedicineStaff(id:any): void {
    this.userService.getMedicineStaff(id).subscribe(res => {
      this.medicineStaff = res;
    })
  }

}
