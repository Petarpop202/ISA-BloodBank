import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { BloodDonor } from 'src/app/model/bloodDonor';
import { Complains } from 'src/app/model/complain';
import { SystemAdministrator } from 'src/app/model/systemAdministrator';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { ComplainsResponseDialogComponent } from '../complains-response-dialog/complains-response-dialog/complains-response-dialog.component';



@Component({
  selector: 'app-zalbe',
  templateUrl: './zalbe.component.html',
  styleUrls: ['./zalbe.component.css']
})
export class ZalbeComponent implements OnInit {

  constructor(public dialog: MatDialog, private userService: UserService) { }

  complains: Complains[] = []; 
  user: BloodDonor = new BloodDonor;
  displayedColumns = ['sadrzaj', 'odgovori'];
  public dataSource = new MatTableDataSource<Complains>();
  ngOnInit(): void {
    this.userService.getComplains().subscribe(res=>{
      this.complains = res;
      this.dataSource.data = this.complains;      
    })
  }

  getUserById(id: any){
    this.userService.getUser(id).subscribe(res=>{
      this.user = res;
      console.log(this.user.name)
      
    })
   
  }

  public openResponseDialog(bb: any): void{
    const dialogRef = this.dialog.open(ComplainsResponseDialogComponent, {  
      data: {complain: bb},    
      height: '400px',
      width: '300px',
    })
  }

}
