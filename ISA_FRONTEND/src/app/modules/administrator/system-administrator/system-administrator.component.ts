import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BloodBank } from 'src/app/model/bloodBank';
import { BloodBankService } from 'src/app/services/blood-bank.service';
import { LoginService } from 'src/app/services/login.service';
import { SystemAdministrator } from 'src/app/model/systemAdministrator';
import { MatDialog } from '@angular/material/dialog';
import { BloodBankInfoDialogComponent } from '../blood-bank-info-dialog/blood-bank-info-dialog.component';
import { NewAdminDialogComponent } from '../new-admin-dialog/new-admin-dialog.component';
import { NewSystemAdminDialogComponent } from '../new-system-admin-dialog/new-system-admin-dialog.component';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';
import { ChangePasswordDialogComponent } from '../change-password-dialog/change-password-dialog.component';



@Component({
  selector: 'app-system-administrator',
  templateUrl: './system-administrator.component.html',
  styleUrls: ['./system-administrator.component.css']
})
export class SystemAdministratorComponent implements OnInit {

  constructor(private bloodBankService: BloodBankService, private _liveAnnouncer: LiveAnnouncer, private loginService: LoginService, public dialog: MatDialog, private userService: UserService) { }

  
  @ViewChild(MatSort)
  sort!: MatSort;

  public dataSource = new MatTableDataSource<BloodBank>();
  banks: BloodBank[] = [];
  admin: SystemAdministrator = new SystemAdministrator;
  user: User = new User;

  displayedColumns: string[] = ['id', 'name', 'averageGrade', 'city', 'info', 'newAdmin'];
  addresses: string[] = ['Sve']
  filteredValues = {
    search: '',
    selectedCity: 'Sve',
    gradeFrom: 0.0,
    gradeTo: 5.0
  }

  ngOnInit(): void {
    this.getBanks();
    this.loggedAdmin();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getBanks() : void {
    this.bloodBankService.getBloodBanks().subscribe(res=>{
        this.banks = res;
        this.dataSource.data = this.banks;
        this.getAddresses();
      })
  }

  getAddresses() : void{
    this.banks.forEach(bank => {
      this.addresses.push(bank.address.city)
    });
    this.addresses = [...new Set(this.addresses)];
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter() {
    this.dataSource.filterPredicate = function(data, filter){
      let _filter = JSON.parse(filter);
      return (data.name.toLocaleLowerCase().includes(_filter.search.toLocaleLowerCase())
      || data.address.city.toLocaleLowerCase().includes(_filter.search.toLocaleLowerCase()))
      && (data.averageGrade >= Number(_filter.gradeFrom) && data.averageGrade <= Number(_filter.gradeTo))
      && (_filter.selectedCity === 'Sve' ? true : data.address.city.toLocaleLowerCase() === _filter.selectedCity.toLocaleLowerCase());
    }
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }

  resetFilters() {
    this.filteredValues.search = '';
    this.filteredValues.gradeFrom = 0.0;
    this.filteredValues.gradeTo = 5.0;
    this.filteredValues.selectedCity = 'Sve';
    this.applyFilter();
  }

  loggedAdmin(){
    this.loginService.whoAmI().subscribe(res => {
      this.admin = res;
      if(this.admin.lastPasswordResetDate == null && this.admin.username != "plaoludastruja1"){
        this.openChangePasswordDialog(res);
      }
     
    })
  }

  public openChangePasswordDialog(adm: any): void{
    const dialogRef = this.dialog.open(ChangePasswordDialogComponent, {  
      data: {admin: adm},    
      height: '500px',
      width: '400px',
    })
  }

  public openBloodBankInfoDialog(bbId: any): void{
    const dialogRef = this.dialog.open(BloodBankInfoDialogComponent, {
      data: {bloodBankId: bbId},
      height: '500px',
      width: '400px',
    })
  }

  public openNewAdminDialog(bb: any): void{
    const dialogRef = this.dialog.open(NewAdminDialogComponent, {  
      data: {bloodBank: bb},    
      height: '900px',
      width: '1000px',
    })
  }

  public openNewSystemAdminDialog(): void{
    const dialogRef = this.dialog.open(NewSystemAdminDialogComponent, {  
        
      height: '900px',
      width: '1000px',
    })
  }

}
