import { Component, OnInit } from '@angular/core';
import { BloodBank } from 'src/app/model/bloodBank';
import { BloodBankService } from 'src/app/services/blood-bank.service';

@Component({
  selector: 'app-blood-center',
  templateUrl: './blood-center.component.html',
  styleUrls: ['./blood-center.component.css']
})
export class BloodCenterComponent implements OnInit {

  bloodBanks: BloodBank[] = [];
  bloodBank: BloodBank | undefined;
  constructor(private bloodBankService:BloodBankService) { }

  ngOnInit(): void {
    this.getBloodBank("123");
    //this.getBloodBanks();
  }

  
  public getBloodBank(id:any): void {
    this.bloodBankService.getBloodBank(id).subscribe(res => {
      this.bloodBank = res;
    })
  }

  public getBloodBanks(): void {
    this.bloodBankService.getBloodBanks().subscribe(res => {
      this.bloodBanks = res;
    })
  }

}
