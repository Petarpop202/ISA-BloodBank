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
  banks: BloodBank[] = [];
  unique = true;

  ngOnInit(): void {
    this.bloodBankService.getBloodBanks
  }

  getBanks() : void {
    this.bloodBankService.getBloodBanks().subscribe(res=>{        
        this.banks = res;        
      })
  }

  public createBloodBank(): void {
    
    
    if(this.validateInput() == false){
      alert("sva polja moraju biti popunjena!")
      return;
    } else {
      this.bloodBankService.createBloodBank(this.newBloodBank).subscribe(res => {
        this.newBloodBank = res;
        this.router.navigate(['/systemAdministrator']);
      })
    }
    
    
  }

  validateInput():boolean{
    if(this.newBloodBank.name == "" || this.newBloodBank.address.city == "" || this.newBloodBank.address.country == "" || this.newBloodBank.address.street == ""
    || this.newBloodBank.address.streetNum == "" || this.newBloodBank.description == ""){
      return false;
    }
    return true;
  }

  validateName(name: string):boolean{
    if(this.bloodBankService.isNameUnique(name).subscribe(res => {
      this.unique = res;      
    }))
    if(this.unique){
      return true;      
    }
    return false;
  }


}
