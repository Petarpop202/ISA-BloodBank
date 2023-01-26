import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BloodBankService } from 'src/app/services/blood-bank.service';

@Component({
  selector: 'app-reject-donation-dialog',
  templateUrl: './reject-donation-dialog.component.html',
  styleUrls: ['./reject-donation-dialog.component.css']
})
export class RejectDonationDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<RejectDonationDialogComponent>,  private bloodBankService:BloodBankService) { }
  centerVisitId: string = ''
  ngOnInit(): void {
    this.centerVisitId = this.data.centerVisitId;
  }

  confirm(){
    this.bloodBankService.updateHasReport(this.centerVisitId).subscribe(res=>{
      //this.donors = res;
    })
    this.dialogRef.close()
  }
}
