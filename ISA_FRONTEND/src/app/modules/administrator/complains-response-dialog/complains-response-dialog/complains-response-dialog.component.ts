import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { es } from 'date-fns/locale';
import { BloodBank } from 'src/app/model/bloodBank';
import { BloodDonor } from 'src/app/model/bloodDonor';
import { Complains } from 'src/app/model/complain';
import { SystemAdministrator } from 'src/app/model/systemAdministrator';
import { BloodBankService } from 'src/app/services/blood-bank.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-complains-response-dialog',
  templateUrl: './complains-response-dialog.component.html',
  styleUrls: ['./complains-response-dialog.component.css']
})
export class ComplainsResponseDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ComplainsResponseDialogComponent>, private userService: UserService, private loginService: LoginService, private bloodBankService: BloodBankService) { }


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
    this.selectedComplain.response = this.response;
    this.userService.updateComplainResponse(this.selectedComplain.id, this.response).subscribe(res => {      
      this.userService.updateComplainAdmin(this.selectedComplain.id, this.systemAdministrator1.id, this.user.id).subscribe(res =>{  
        this.dialogRef.close();          
      })      
    })
    
  }

}
