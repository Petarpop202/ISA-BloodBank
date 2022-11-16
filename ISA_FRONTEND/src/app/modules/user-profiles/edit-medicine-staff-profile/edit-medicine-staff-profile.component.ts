import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineStaff } from 'src/app/model/medicineStaff';
import { UserService } from 'src/app/services/user.service';
import { EMPTY, catchError } from 'rxjs';

@Component({
  selector: 'app-edit-medicine-staff-profile',
  templateUrl: './edit-medicine-staff-profile.component.html',
  styleUrls: ['./edit-medicine-staff-profile.component.css']
})
export class EditMedicineStaffProfileComponent implements OnInit {

  id?:string | null;
  medicineStaff : MedicineStaff = new MedicineStaff;
  greska?: string
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

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
    if(this.inputOK()){
      this.userService.updateMedicineStaff(this.medicineStaff).pipe(
        catchError(() => {
          this.greska = "Korisničko ime zauzeto"
          return EMPTY;
        })
      )
      .subscribe(res => {
        this.medicineStaff = res;
        this.router.navigate(['/medicineStaffProfile', this.medicineStaff.id]);
      })
    }
  }

  inputOK(): boolean{
    if(this.medicineStaff.name == "" || this.medicineStaff.surname == "" || this.medicineStaff.username == ""
     || this.medicineStaff.password == "" || this.medicineStaff.jmbg == "" || this.medicineStaff.mail == "" 
     || this.medicineStaff.phoneNumber == "" || this.medicineStaff.address.street == "" ||this.medicineStaff.address.streetNum == ""
     ||this.medicineStaff.address.city == "" || this.medicineStaff.address.country == ""){
       this.greska = "Popunite sva polja"
       return false;
    }
    return true;
  }
}
