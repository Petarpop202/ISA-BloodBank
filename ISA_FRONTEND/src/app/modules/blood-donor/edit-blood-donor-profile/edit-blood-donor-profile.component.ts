import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { BloodDonor } from 'src/app/model/bloodDonor';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-edit-blood-donor-profile',
  templateUrl: './edit-blood-donor-profile.component.html',
  styleUrls: ['./edit-blood-donor-profile.component.css']
})
export class EditBloodDonorProfileComponent implements OnInit {

  constructor(private userService: UserService, public dialog: MatDialog, private router: Router,private loginService:LoginService) { }

  public donor: BloodDonor = new BloodDonor;
  donorId = "";
  isMale = true;
  error = false;
  errorText = "POLJA NE MOGU BITI PRAZNA!";

  ngOnInit(): void {
    this.loginService.whoAmI().subscribe(res=>{
      this.donorId = res.id;
      this.userService.getUser(this.donorId).subscribe(res=>{
        this.donor = res;
        if (this.donor.gender === "FEMALE")
          this.isMale = false;
        else 
          this.isMale = true;
      });
    })
   
  }

  editBloodDonorProfile(){
    if(this.validateInput()){
      this.userService.updateUser(this.donor).subscribe(res=>{
        if (res == null){
          this.error = true;
          this.errorText = "KORISNIČKO IME JE ZAUZETO!";
        }
        else{
          this.error = false;
          this.router.navigate(["/donor/bloodDonorProfile"]);
        }
      })
    }
}

  validateInput(): boolean{
    if(this.donor.name == "" || this.donor.surname == "" || this.donor.username == ""
     || this.donor.password == "" || this.donor.jmbg == "" || this.donor.mail == "" 
     || this.donor.phoneNumber == "" || this.donor.address.street == "" ||this.donor.address.streetNum == ""
     ||this.donor.address.city == "" || this.donor.address.country == ""){
       this.error = true;
       this.errorText = "POLJA NE MOGU BITI PRAZNA!"
       return false;
    }
    this.error = false;
    return true;
  }

  setGender(e: string):void{
    this.donor.gender = e;
  }

  cancelEdit() {
    this.router.navigate(["/donor/bloodDonorProfile"]);
  }
}
