import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BloodAmount } from 'src/app/model/bloodAmount';
import { CenterVisit } from 'src/app/model/centerVisit';
import { BloodBankService } from 'src/app/services/blood-bank.service';

@Component({
  selector: 'app-start-appointment-dialog',
  templateUrl: './start-appointment-dialog.component.html',
  styleUrls: ['./start-appointment-dialog.component.css']
})
export class StartAppointmentDialogComponent implements OnInit {
  bloodTypelist: string[] = []
  bloodTypeValue: string = ''
  bloodAmountValue: number = 0
  id?:string
  centerVisit: CenterVisit = new CenterVisit
  bloodAmount: BloodAmount = new BloodAmount
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<StartAppointmentDialogComponent>,  private bloodBankService:BloodBankService) { }

  ngOnInit(): void {
    this.getCenterVisit()
    this.getAllBloodTypes()
  }

  public getCenterVisit():void{

    this.bloodBankService.getCenterVisit(this.data.centerVisitId).subscribe(res => {
      this.centerVisit = res
    })
  }

  public endAppointment():void{    
    console.log(this.bloodTypeValue)
    console.log(this.bloodAmountValue)
    this.bloodAmount.bloodType = this.bloodTypeValue
    this.bloodAmount.amount = this.bloodAmountValue
    this.bloodAmount.bloodBank = this.centerVisit.bloodDonationAppointment.bloodBank
    this.bloodBankService.addBloodDonation(this.bloodAmount).subscribe(res => {
      //this.bloodTypelist = res
      this.bloodBankService.updateHasReport(this.centerVisit.id).subscribe(res => {
        this.dialogRef.close();
      }
      )
    })
    
  }

  public getAllBloodTypes():void{
    this.bloodBankService.getAllBloodTypes().subscribe(res => {
      this.bloodTypelist = res
    })
  }
}
