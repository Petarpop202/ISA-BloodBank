import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { BloodDonor } from 'src/app/model/bloodDonor';
import { Complains } from 'src/app/model/complain';
import { SystemAdministrator } from 'src/app/model/systemAdministrator';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { ComplainsResponseDialogComponent } from '../complains-response-dialog/complains-response-dialog/complains-response-dialog.component';
import { ComplainsViewDialogComponent } from '../complains-view-dialog/complains-view-dialog/complains-view-dialog.component';



@Component({
  selector: 'app-zalbe',
  templateUrl: './zalbe.component.html',
  styleUrls: ['./zalbe.component.css']
})
export class ZalbeComponent implements OnInit {

  constructor(public dialog: MatDialog, private userService: UserService, private loginService: LoginService) { }

  complains: Complains[] = []; 
  user: BloodDonor = new BloodDonor;
  systemAdministrator: SystemAdministrator = new SystemAdministrator;
  displayedColumns = ['sadrzaj', 'odgovori'];
  public dataSource = new MatTableDataSource<Complains>();
  zalbeBezOdgovora:boolean = true;
  ngOnInit(): void {
    this.loginService.whoAmI().subscribe(res => {
      this.systemAdministrator = res;
      
    })
    
  }

  getUserById(id: any){
    this.userService.getUser(id).subscribe(res=>{
      this.user = res;
      console.log(this.user.name)
      
    })
   
  }

  stareZalbe(){
    this.zalbeBezOdgovora = true;
    this.userService.getComplainsWithNoResponse().subscribe(res=>{
      this.complains = res;
      this.dataSource.data = this.complains;      
    }) 
  }
  noveZalbe(){
    this.zalbeBezOdgovora = false;
    this.userService.getComplainsWithResponse(this.systemAdministrator.id).subscribe(res=>{
      this.complains = res;
      this.dataSource.data = this.complains;      
    })    
  }

  public openResponseDialog(bb: any): void{
    const dialogRef = this.dialog.open(ComplainsResponseDialogComponent, {  
      data: {complain: bb},    
      height: '400px',
      width: '300px',
    })
  }

  public openComplainsViewDialog(bb: any): void{
    const dialogRef = this.dialog.open(ComplainsViewDialogComponent, {  
      data: {complain: bb},    
      height: '400px',
      width: '300px',
    })
  }

  

}
