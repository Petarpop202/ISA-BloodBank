import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BloodBank } from 'src/app/model/bloodBank';
import { MedicineStaff } from 'src/app/model/medicineStaff';
import { BloodBankService } from 'src/app/services/blood-bank.service';

@Component({
  selector: 'app-blood-bank-info-dialog',
  templateUrl: './blood-bank-info-dialog.component.html',
  styleUrls: ['./blood-bank-info-dialog.component.css']
})
export class BloodBankInfoDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<BloodBankInfoDialogComponent>, private bloodBankService: BloodBankService) { }

  bloodBank : BloodBank = new BloodBank;
  public medicineStaff: MedicineStaff[] = [];
  ngOnInit(): void {
    this.bloodBank = this.data.bloodBankId;
    this.bloodBankService.getMedicineStaffFromBloodBank(this.data.bloodBankId.id).subscribe(res => {
      this.medicineStaff = res;
    })
  }

}
