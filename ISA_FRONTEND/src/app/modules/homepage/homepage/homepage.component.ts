import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BloodBank } from 'src/app/model/bloodBank';
import { BloodBankService } from 'src/app/services/blood-bank.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  constructor(private bloodBankService: BloodBankService, private _liveAnnouncer: LiveAnnouncer) { }

  
  @ViewChild(MatSort)
  sort!: MatSort;

  public dataSource = new MatTableDataSource<BloodBank>();
  banks: BloodBank[] = [];
  displayedColumns: string[] = ['id', 'name', 'averageGrade', 'city'];
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
      this.addresses.push(bank.adress.city)
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
      || data.adress.city.toLocaleLowerCase().includes(_filter.search.toLocaleLowerCase()))
      && (data.averageGrade >= Number(_filter.gradeFrom) && data.averageGrade <= Number(_filter.gradeTo))
      && (_filter.selectedCity === 'Sve' ? true : data.adress.city.toLocaleLowerCase() === _filter.selectedCity.toLocaleLowerCase());
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
}
