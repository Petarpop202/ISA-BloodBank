import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval} from 'rxjs';
import { BloodBank } from 'src/app/model/bloodBank';
import { BloodBankService } from 'src/app/services/blood-bank.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private bloodBankService:BloodBankService) { }
  lat : any;
  lng : any;
  lat1 : any;
  lng1 : any;
  lng3 : number = 19.830855000000003;
  lat3 : number = 45.26531099999997;
  id : string | null | undefined;
  bloodBank: BloodBank = new BloodBank;
  sub:Subscription | undefined;

  ngOnInit(): void {
    this.getMedicineWorkerBloodBank();
    interval(5000).subscribe(x => {
      this.getCoordinates();
    })
  }

  public getMedicineWorkerBloodBank(): void {    
    this.bloodBankService.getMedicineWorkerBloodBank().subscribe(res => {
      this.id = res;
      this.getBloodBank(this.id);
      this.bloodBankService.sendCoordinates(this.id).subscribe(res=>{
        alert(res);
      });
    })
  }

  public getBloodBank(id:any): void {
    this.bloodBankService.getBloodBank(id).subscribe(res => {
      this.bloodBank = res;
      this.lat = Number(this.bloodBank.address.latitude)
      this.lng = Number(this.bloodBank.address.longitude)
    })
  }

  public getCoordinates():void{
    this.bloodBankService.getCoordinates().subscribe(res=>{
      this.lat1 = res.latitude;
      this.lng1 = res.longitude;
    })
  }
}
