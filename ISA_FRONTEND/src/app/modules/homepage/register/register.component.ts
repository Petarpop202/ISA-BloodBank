import { Component, OnInit } from '@angular/core';
import { BloodDonor } from 'src/app/model/bloodDonor';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  public donor:BloodDonor = new BloodDonor;
  hide:boolean = true;

  ngOnInit(): void {
   
  }

  createDonor():void{
    this.userService.createUser(this.donor).subscribe();
  }

  setGender(e: string):void{
    this.donor.gender = e;
  }
}
