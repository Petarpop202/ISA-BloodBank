import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { BloodDonor } from 'src/app/model/bloodDonor';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-blood-donor-profile',
  templateUrl: './blood-donor-profile.component.html',
  styleUrls: ['./blood-donor-profile.component.css']
})
export class BloodDonorProfileComponent implements OnInit {

  constructor(private userService: UserService, public dialog: MatDialog, private loginService: LoginService) { }

  public donor: BloodDonor = new BloodDonor;
  donorId = "";
  gender = "";
  isHidden = true;
  passwordType = "password";
  passwordButtonText = "Prikaži"

  ngOnInit(): void {  
    this.loginService.whoAmI().subscribe(res=>{
      this.donorId = res.id;
      this.userService.getUser(this.donorId).subscribe(res=>{
        this.donor = res;
        if (this.donor.gender === "MALE"){
          this.gender = "Muško";
        }
        else {
          this.gender = "Žensko";
        }
      });
    })
    
  }

  togglePasswordVisibility() : void {
    this.isHidden = !this.isHidden;
    if (!this.isHidden){
      this.passwordType = "text";
      this.passwordButtonText = "Sakrij";
    }
    else{
      this.passwordType = "password";
      this.passwordButtonText = "Prikaži";
    }
  }
}
