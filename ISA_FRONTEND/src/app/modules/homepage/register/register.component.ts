import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { BloodDonor } from 'src/app/model/bloodDonor';
import { UserService } from 'src/app/services/user.service';
import { ValidationErrorComponent } from './validation-error/validation-error.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService,public dialog: MatDialog) { }

  public donor:BloodDonor = new BloodDonor;
  hide:boolean = true;
  public checkPass:string = '';

  ngOnInit(): void {
    this.donor.gender = "MALE";
  }

  createDonor():void{
    if(this.validateInput())
    this.userService.createUser(this.donor).subscribe(res=>{
      if(res != null)
        alert("Korisnik : " + res.name + " je uspesno registrovan !");
      else alert("Korisnicko ime vec postoji !");
    })
    else {
      const dialogRef = this.dialog.open(ValidationErrorComponent, {
        data: {},
        height: '200px',
        width: '400px',
        //data: {name: this.name, animal: this.animal},
      });
    }
  }

  setGender(e: string):void{
    this.donor.gender = e;
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
