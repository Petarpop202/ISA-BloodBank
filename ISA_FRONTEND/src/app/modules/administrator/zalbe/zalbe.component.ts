import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Complains } from 'src/app/model/complain';
import { SystemAdministrator } from 'src/app/model/systemAdministrator';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-zalbe',
  templateUrl: './zalbe.component.html',
  styleUrls: ['./zalbe.component.css']
})
export class ZalbeComponent implements OnInit {

  constructor(public dialog: MatDialog, private userService: UserService) { }

  complains: Complains[] = []; 
  displayedColumns = ['korisnik', 'sadrzaj', 'pogledaj'];
  public dataSource = new MatTableDataSource<Complains>();
  ngOnInit(): void {
    this.userService.getComplains().subscribe(res=>{
      this.complains = res;
      this.dataSource.data = this.complains;      
    })
  }

}
