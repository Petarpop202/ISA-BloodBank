import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BloodBank } from 'src/app/model/bloodBank';
import { MedicineStaff } from 'src/app/model/medicineStaff';
import { BloodBankService } from 'src/app/services/blood-bank.service';

@Component({
  selector: 'app-blood-center',
  templateUrl: './blood-center.component.html',
  styleUrls: ['./blood-center.component.css']
})
export class BloodCenterComponent implements OnInit {

  id : string | null | undefined;
  bloodBanks: BloodBank[] = [];
  bloodBank: BloodBank = new BloodBank;
  medicineStaff : MedicineStaff[] = []

  constructor(private bloodBankService:BloodBankService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getBloodBank(this.id);
    this.getMedicineStaffFromBloodBank(this.id);
  }
  
  public getBloodBank(id:any): void {
    this.bloodBankService.getBloodBank(id).subscribe(res => {
      this.bloodBank = res;
    })
  }

  public getMedicineStaffFromBloodBank(id:any) {
    this.bloodBankService.getMedicineStaffFromBloodBank(id).subscribe(res => {
      this.medicineStaff = res;
    })
  }

  public numSequence(n: any): Array<number> {
    return Array(n);
  }

}
