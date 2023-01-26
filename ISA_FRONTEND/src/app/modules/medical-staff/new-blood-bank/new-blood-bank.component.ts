import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BloodBank } from 'src/app/model/bloodBank';
import { BloodBankService } from 'src/app/services/blood-bank.service';
import { NewAdminDialogComponent } from '../../administrator/new-admin-dialog/new-admin-dialog.component';

@Component({
  selector: 'app-new-blood-bank',
  templateUrl: './new-blood-bank.component.html',
  styleUrls: ['./new-blood-bank.component.css']
})
export class NewBloodBankComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private bloodBankService: BloodBankService, public dialog: MatDialog) { }

  public newBloodBank:BloodBank = new BloodBank;
  banks: BloodBank[] = [];
  unique = true;

  ngOnInit(): void {
    this.bloodBankService.getBloodBanks
  }

  getBanks() : void {
    this.bloodBankService.getBloodBanks().subscribe(res=>{        
        this.banks = res;        
      })
  }

  getGeoLocation(): Observable<any> {
    console.log('Getting address: ', this.newBloodBank.address.city + ' ' + this.newBloodBank.address.street + ' ' + this.newBloodBank.address.streetNum);
    let geocoder = new google.maps.Geocoder();
    return Observable.create((observer: { next: (arg0: google.maps.LatLng) => void; complete: () => void; error: () => void; }) => {
        geocoder.geocode({
            'address': this.newBloodBank.address.city + ' ' + this.newBloodBank.address.street + ' ' + this.newBloodBank.address.streetNum
        }, (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
                observer.next(results[0].geometry.location);
                alert(results[0].geometry.location);
                observer.complete();
            } else {
                console.log('Error: ', results, ' & Status: ', status);
                observer.error();
            }
        });
    });
}

  public createBloodBank(): void {
    
    
    if(this.validateInput() == false){
      alert("sva polja moraju biti popunjena!")
      return;
    } else {
      this.bloodBankService.createBloodBank(this.newBloodBank).subscribe(res => {
        this.newBloodBank = res;
        this.openNewAdminDialog(this.newBloodBank);
      })
    }
    
    
  }

  validateInput():boolean{
    if(this.newBloodBank.name == "" || this.newBloodBank.address.city == "" || this.newBloodBank.address.country == "" || this.newBloodBank.address.street == ""
    || this.newBloodBank.address.streetNum == "" || this.newBloodBank.description == ""){
      return false;
    }
    return true;
  }

  validateName(name: string):boolean{
    if(this.bloodBankService.isNameUnique(name).subscribe(res => {
      this.unique = res;      
    }))
    if(this.unique){
      return true;      
    }
    return false;
  }

  public openNewAdminDialog(bb: any): void{
    const dialogRef = this.dialog.open(NewAdminDialogComponent, {  
      data: {bloodBank: bb},    
      height: '900px',
      width: '1000px',
    })
  }


}
