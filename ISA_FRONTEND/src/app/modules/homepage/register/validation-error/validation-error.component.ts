import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.css']
})
export class ValidationErrorComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
