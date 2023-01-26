import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BloodBank } from 'src/app/model/bloodBank';
import { MedicineStaff } from 'src/app/model/medicineStaff';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-admin-dialog',
  templateUrl: './new-admin-dialog.component.html',
  styleUrls: ['./new-admin-dialog.component.css']
})
export class NewAdminDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<NewAdminDialogComponent>, private userService: UserService) { }

  public donor:MedicineStaff = new MedicineStaff;
  public checkPass:string = '';
  bloodBank : BloodBank = new BloodBank;
  ngOnInit(): void {
    this.bloodBank = this.data.bloodBank;
    this.donor.gender = "MALE";    
    this.donor.bloodBank = this.data.bloodBank;
    
  }

  setGender(e: string):void{
    
    this.donor.gender = e;
  }

  createDonor():void{
    if(this.validateInput())
    this.userService.createMedicineStaff(this.donor).subscribe(res=>{
      if(res != null){
        alert("Korisnik : " + res.name + " je uspesno registrovan !");
        this.dialogRef.close();
      }
      else alert("Korisnicko ime vec postoji !");
    })
    
  }
 

  validateInput():boolean{
    if(this.donor.name == "" || this.donor.surname == "" || this.donor.mail == ""
     || this.donor.jmbg == "" || this.donor.password == "" || this.donor.phoneNumber == "" 
     || this.donor.address.country == "" || this.donor.address.city == "" || this.donor.address.street == "")
      return false;
    else return this.validatePassword();
  }

  validatePassword():boolean{
    if(this.donor.password == this.checkPass)
      return true;
    else return false;
  }
}
