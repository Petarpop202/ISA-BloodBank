import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-start-appointment-dialog',
  templateUrl: './start-appointment-dialog.component.html',
  styleUrls: ['./start-appointment-dialog.component.css']
})
export class StartAppointmentDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<StartAppointmentDialogComponent>) { }

  ngOnInit(): void {
  }

  public endAppointment():void{
    this.dialogRef.close();
  }
}
