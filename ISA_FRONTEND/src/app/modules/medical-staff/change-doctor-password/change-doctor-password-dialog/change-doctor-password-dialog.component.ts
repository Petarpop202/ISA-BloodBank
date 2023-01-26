import { Component, Inject,OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MedicineStaff } from 'src/app/model/medicineStaff';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-doctor-password-dialog',
  templateUrl: './change-doctor-password-dialog.component.html',
  styleUrls: ['./change-doctor-password-dialog.component.css']
})
export class ChangeDoctorPasswordDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ChangeDoctorPasswordDialogComponent>, private userService: UserService) { }
  admin: MedicineStaff = new MedicineStaff;
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
      this.userService.doctorChangePassword(this.admin.id, this.newPassword).subscribe(res => {
        
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
