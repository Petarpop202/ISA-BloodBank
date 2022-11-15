import { Component, OnInit } from '@angular/core';
import { DonorSurvey } from 'src/app/model/donorSurvey';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-donor-survey',
  templateUrl: './donor-survey.component.html',
  styleUrls: ['./donor-survey.component.css']
})
export class DonorSurveyComponent implements OnInit {

  constructor(private userService : UserService) { }
  isAvailable: boolean = true;
  num: number = 0;
  survey : DonorSurvey = new DonorSurvey();
  id:number = 1;

  ngOnInit(): void {
  }

  setTrue(): void {
    this.num += 1;
  }

  setFalse(): void {
    this.num -= 1;
  }

  surveyDone(): void {
    if(this.num < 0)
      this.survey.isAvailable = false;
    else this.survey.isAvailable = true;
    this.getUser();
  }

  getUser():void{
    this.userService.getUser(this.id).subscribe(res=>{
      this.survey.bloodDonor = res;
      this.putSurvey();
    })
  }

  putSurvey():void{
    this.userService.createSurvey(this.survey).subscribe(res=>{
      alert("Anketa je registrovana !" + res.bloodDonor.name + " ");
    })
  }
}
