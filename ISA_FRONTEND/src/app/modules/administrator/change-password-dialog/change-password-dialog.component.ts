import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SystemAdministrator } from 'src/app/model/systemAdministrator';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: ['./change-password-dialog.component.css']
})
export class ChangePasswordDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ChangePasswordDialogComponent>, private userService: UserService) { }
  admin: SystemAdministrator = new SystemAdministrator;
  newPassword: string = '';
  confirmPassword: string = '';
  ngOnInit(): void {
    this.admin = this.data.admin;    
  }

  changePassword(): void{
    
    if(this.chechPassword() == false){
      alert('lozinke se ne poklapaju');
    }
    
    else  {
      this.userService.systemAdministratorChangePassword(this.admin.id, this.newPassword).subscribe(res => {
        
        alert('LOZINKA USPESNO PROMENJENA!');
        this.dialogRef.close();
      })
    }
    
  }

  chechPassword(): boolean{
    if(this.newPassword === this.confirmPassword){
      return true;
    }
    else{
      return false;
    }
  }

  checkOldPassword(): boolean{
    if(this.chechPassword()){
      if(this.newPassword != this.admin.password){
        return true;
      }
    }
    return false;
  }

}
