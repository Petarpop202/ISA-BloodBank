import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BloodBank } from 'src/app/model/bloodBank';
import { BloodDonor } from 'src/app/model/bloodDonor';
import { Complains } from 'src/app/model/complain';
import { SystemAdministrator } from 'src/app/model/systemAdministrator';
import { BloodBankService } from 'src/app/services/blood-bank.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-complains-view-dialog',
  templateUrl: './complains-view-dialog.component.html',
  styleUrls: ['./complains-view-dialog.component.css']
})
export class ComplainsViewDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ComplainsViewDialogComponent>, private userService: UserService, private loginService: LoginService, private bloodBankService: BloodBankService) { }


  public selectedComplain:Complains = new Complains;
  public systemAdministrator1 = new SystemAdministrator;
  public user = new BloodDonor;
  public bloodBank = new BloodBank;
  public novaBanka = new BloodBank;
  response: string = '';
  ngOnInit(): void {
    this.selectedComplain = this.data.complain;
    this.loginService.whoAmI().subscribe(res => {
      this.systemAdministrator1 = res;
      
    })
    this.getBloodBank();
    this.getUser();
  }
  
  getBloodBank(){
    this.bloodBankService.getBloodBank(this.selectedComplain.bloodBank.id).subscribe(res => {
      this.bloodBank = res;
    })
  }

  getUser(){
    this.userService.getUser(this.selectedComplain.bloodDonor.id).subscribe(res => {
      this.user = res;
    })
  }

  confirm(){
    this.dialogRef.close();
    
  }

}
