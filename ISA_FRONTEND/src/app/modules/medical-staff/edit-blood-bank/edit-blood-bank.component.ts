import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BloodBank } from 'src/app/model/bloodBank';
import { BloodBankService } from 'src/app/services/blood-bank.service';
import { EMPTY, catchError } from 'rxjs';

@Component({
  selector: 'app-edit-blood-bank',
  templateUrl: './edit-blood-bank.component.html',
  styleUrls: ['./edit-blood-bank.component.css']
})
export class EditBloodBankComponent implements OnInit {

  id : string | null | undefined;
  bloodBank: BloodBank = new BloodBank;
  greska?: String
  
  constructor(private route: ActivatedRoute, private router: Router, private bloodBankService:BloodBankService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getBloodBankToEdit(this.id);
  }

  public getBloodBankToEdit(id:any): void {
    this.bloodBankService.getBloodBank(id).subscribe(res => {
      this.bloodBank = res;
    })
  }

  public updateBloodBank(): void {
    if(this.inputOK()){
      this.bloodBankService.updateBloodBank(this.bloodBank).pipe(
        catchError(() => {
          this.greska = "Korisničko ime zauzeto"
          return EMPTY;
        })
      ).subscribe(res => {
        this.bloodBank = res;
        this.router.navigate(['medicalworker/myBloodBank', this.bloodBank.id]);
      })
    }
  }

  inputOK(): boolean{
    if(this.bloodBank.name == "" || this.bloodBank.description == ""
      || this.bloodBank.address.street == "" ||this.bloodBank.address.streetNum == ""
      ||this.bloodBank.address.city == "" || this.bloodBank.address.country == ""){
        this.greska = "Popunite sva polja"
        return false;
    }
    return true;
  }

}
