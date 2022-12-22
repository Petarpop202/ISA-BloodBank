import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BloodBank } from 'src/app/model/bloodBank';
import { SystemAdministrator } from 'src/app/model/systemAdministrator';
import { UserService } from 'src/app/services/user.service';
import { NewAdminDialogComponent } from '../new-admin-dialog/new-admin-dialog.component';

@Component({
  selector: 'app-new-system-admin-dialog',
  templateUrl: './new-system-admin-dialog.component.html',
  styleUrls: ['./new-system-admin-dialog.component.css']
})
export class NewSystemAdminDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<NewSystemAdminDialogComponent>, private userService: UserService) { }

  public donor:SystemAdministrator = new SystemAdministrator;
  public checkPass:string = '';
  bloodBank : BloodBank = new BloodBank;
  ngOnInit(): void {
    
    this.donor.gender = "MALE";    
    
    
  }

  setGender(e: string):void{
    
    this.donor.gender = e;
  }

  createDonor():void{
    if(this.validateInput())
    this.userService.createSystemAdministrator(this.donor).subscribe(res=>{
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
