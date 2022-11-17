import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BloodBank } from 'src/app/model/bloodBank';
import { BloodBankService } from 'src/app/services/blood-bank.service';

@Component({
  selector: 'app-new-blood-bank',
  templateUrl: './new-blood-bank.component.html',
  styleUrls: ['./new-blood-bank.component.css']
})
export class NewBloodBankComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private bloodBankService: BloodBankService) { }

  public newBloodBank:BloodBank = new BloodBank;

  ngOnInit(): void {
  }

  public createBloodBank(): void {
    if(this.validateInput()){
      this.bloodBankService.createBloodBank(this.newBloodBank).subscribe(res => {
        this.newBloodBank = res;
        this.router.navigate(['/systemAdministrator']);
      })
    } else {
      alert("Sva polja moraju biti popunjena!");
    }
    
  }

  validateInput():boolean{
    if(this.newBloodBank.name == "" || this.newBloodBank.address.city == "" || this.newBloodBank.address.country == "" || this.newBloodBank.address.street == ""
    || this.newBloodBank.address.streetNum == "" || this.newBloodBank.description == ""){
      return false;
    }
    return true;
  }

}
