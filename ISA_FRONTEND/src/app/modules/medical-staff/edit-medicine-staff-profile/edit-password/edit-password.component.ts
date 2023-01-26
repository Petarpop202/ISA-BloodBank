import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { MedicineStaff } from 'src/app/model/medicineStaff';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPasswordComponent implements OnInit {
  id?:string | null;
  medicineStaff : MedicineStaff = new MedicineStaff;
  user:User = new User
  greska?: string
  myPassword: string = ''
  myPasswordAgain?: string = ''
  constructor( private router: Router,private userService: UserService, private loginService:LoginService) { }

  ngOnInit(): void {
    this.getUser()
  }
  public getUser(): void {
    this.loginService.whoAmI().subscribe(res => {
      this.user = res;
      this.id = this.user.id;
      this.getMedicineStaffToEdit(this.id);
    })
  }

  public getMedicineStaffToEdit(id:any): void {
    this.userService.getMedicineStaff(id).subscribe(res => {
      this.medicineStaff = res;
    })
  }

  public updateMedicineStaff(): void {
    if(this.inputOK()){

      this.loginService.editMyPassword(this.id, this.myPassword).subscribe(res => {
        this.myPassword = res;
        this.loginService.logout();
      })
    }
  }

  inputOK(): boolean{
    if(this.myPassword != this.myPasswordAgain || this.myPassword == ''){
       this.greska = "Sifre nisu iste"
       return false;
    }
    return true;
  }
}
