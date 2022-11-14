import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineStaff } from 'src/app/model/medicineStaff';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-medicine-staff-profile',
  templateUrl: './edit-medicine-staff-profile.component.html',
  styleUrls: ['./edit-medicine-staff-profile.component.css']
})
export class EditMedicineStaffProfileComponent implements OnInit {

  id?:string | null;
  medicineStaff : MedicineStaff = new MedicineStaff;
  constructor(private route: ActivatedRoute,private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getMedicineStaffToEdit(this.id);
  }
  
  public getMedicineStaffToEdit(id:any): void {
    this.userService.getMedicineStaff(id).subscribe(res => {
      this.medicineStaff = res;
    })
  }
  public updateMedicineStaff(): void {
    this.userService.updateMedicineStaff(this.medicineStaff).subscribe(res => {
      this.medicineStaff = res;
      this.router.navigate(['/medicineStaffProfile', this.medicineStaff.id]);
    })
  }
}
