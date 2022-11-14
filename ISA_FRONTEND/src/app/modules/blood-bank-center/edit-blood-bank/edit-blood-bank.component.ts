import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BloodBank } from 'src/app/model/bloodBank';
import { BloodBankService } from 'src/app/services/blood-bank.service';

@Component({
  selector: 'app-edit-blood-bank',
  templateUrl: './edit-blood-bank.component.html',
  styleUrls: ['./edit-blood-bank.component.css']
})
export class EditBloodBankComponent implements OnInit {

  id : string | null | undefined;
  bloodBank: BloodBank = new BloodBank;
  
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
    this.bloodBankService.updateBloodBank(this.bloodBank).subscribe(res => {
      this.bloodBank = res;
      this.router.navigate(['/myBloodBank', this.bloodBank.id]);
    })
  }

}
