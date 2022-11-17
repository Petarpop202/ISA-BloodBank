import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/model/user';
import { BloodDonor } from 'src/app/model/bloodDonor';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private userService: UserService, private _liveAnnouncer: LiveAnnouncer) { }

  public dataSource = new MatTableDataSource<User>();
  users: BloodDonor[] = [];  
  addresses: string[] = [];
  searchName = '';
  searchSurname = '';



  displayedColumns: string[] = ['id', 'username' , 'name', 'surname', 'city', 'phone number', 'jmbg', 'gender'];
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() : void {
    this.userService.getDonors().subscribe(res=>{
        this.users = res;
        this.dataSource.data = this.users;
        this.getAddresses();
      })
  }

  getAddresses() : void{
    this.users.forEach(user => {
      this.addresses.push(user.address.city)
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

  search(){
    this.userService.findByNameAndSurname(this.searchName, this.searchSurname).subscribe(res=>{      
      this.dataSource.data = res;
        this.getAddresses();
      
    })
   
  }

  // applyFilter() {
  //   this.dataSource.filterPredicate = function(data, filter){
  //     let _filter = JSON.parse(filter);
  //     return (data.name.toLocaleLowerCase().includes(_filter.search.toLocaleLowerCase()));
  //   }
  //   this.dataSource.filter = JSON.stringify(this.filteredValues);
  // }
  // applyFilterCity() {
  //   this.dataSource.filterPredicate = function(data, filter){
  //     let _filter = JSON.parse(filter);
  //     return (data.surname.toLocaleLowerCase().includes(_filter.search.toLocaleLowerCase()));
  //   }
  //   this.dataSource.filter = JSON.stringify(this.filteredValuesCity);
  // }
}
