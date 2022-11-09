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

  ngOnInit(): void {
    this.donor.gender = "MALE";
  }

  createDonor():void{
    if(this.validateInput())
    this.userService.createUser(this.donor).subscribe(res=>{
      alert("Korisnik : " + res.name + " je uspesno registrovan !")
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
     || this.donor.adress.country == "" || this.donor.adress.city == "" || this.donor.adress.street == "")
      return false;
    else return true;
  }
}
