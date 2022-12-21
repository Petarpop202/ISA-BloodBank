import { Component, OnInit } from '@angular/core';
import { BloodDonor } from 'src/app/model/bloodDonor';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
  donors:BloodDonor[] = []
  donorValue: string = ''
  constructor(private donorService: UserService) { }

  ngOnInit(): void {
    this.getBloodDonors();
  }

  getBloodDonors() : void {
    this.donorService.getDonors().subscribe(res=>{
        this.donors = res;
      })
  }

}
