import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BloodBank } from 'src/app/model/bloodBank';
import { BloodBankService } from 'src/app/services/blood-bank.service';
import { AppointmentDialogComponent } from '../donor-root/appointment-dialog/appointment-dialog.component';
@Component({
  selector: 'app-blood-donor-homepage',
  templateUrl: './blood-donor-homepage.component.html',
  styleUrls: ['./blood-donor-homepage.component.css']
})
export class BloodDonorHomepageComponent implements OnInit {

  constructor(private bloodBankService: BloodBankService, private _liveAnnouncer: LiveAnnouncer,public dialog: MatDialog) { }

  
  @ViewChild(MatSort)
  sort!: MatSort;

  public dataSource = new MatTableDataSource<BloodBank>();
  banks: BloodBank[] = [];
  displayedColumns: string[] = ['id', 'name', 'averageGrade', 'city', 'appointment'];
  addresses: string[] = ['Sve']
  filteredValues = {
    search: '',
    selectedCity: 'Sve',
    gradeFrom: 0.0,
    gradeTo: 5.0
  }

  ngOnInit(): void {
    this.getBanks();
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

  showAppointments(id : string):void{
    const dialogRef = this.dialog.open(AppointmentDialogComponent, {
      data: {bankId: id},
      height: '500px',
      width: '400px',
      //data: {name: this.name, animal: this.animal},
    });    

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //this.animal = result;
      //this.showCurrentAppointment();
    });
  }
}
