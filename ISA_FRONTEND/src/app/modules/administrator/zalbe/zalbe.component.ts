import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { SystemAdministrator } from 'src/app/model/systemAdministrator';

export interface Zalba {
  korisnik: string;
  naslov: string;
  datum: string;  
}

const ELEMENT_DATA: Zalba[] = [
  {korisnik: 'Marko Markovic', naslov: 'Zalba na osoblje', datum: '12.22.2022'},
  {korisnik: 'Pera Peric', naslov: 'Zalba na centar', datum: '15.22.2022'},
]

@Component({
  selector: 'app-zalbe',
  templateUrl: './zalbe.component.html',
  styleUrls: ['./zalbe.component.css']
})
export class ZalbeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  displayedColumns = ['korisnik', 'naslov', 'datum', 'pogledaj'];
   dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}
