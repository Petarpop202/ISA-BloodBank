import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CenterVisit } from 'src/app/model/centerVisit';
import { BloodBankService } from 'src/app/services/blood-bank.service';
//import { CalendarOption } from '@fullcalendar/angular/private-types';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import { Termin } from 'src/app/model/termin';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  Events = []
  id : string | null | undefined;
  constructor(private route: ActivatedRoute, private router: Router, private bloodBankService:BloodBankService) { }
  onDateClick(res: any){
    alert('Clicked on date: ' + res.dateStr);
  }
  centerVisits : CenterVisit[] = []
  termins : Termin[] = []
  termin = new Termin;
  eventss: any = [
    
  ];
   //calendarOptions : CalendarOptions
    calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',       
    plugins: [dayGridPlugin],
    // events: [
    //   { title: 'event 1', date: '2023-01-27'}
    // ]
    
  };

 
  
  // calendarPlugins = [dayGridPlugin];
  
  
  namestr: string = 'pera';

  

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getScheduledAppointmentsFromBloodBank(this.id);
    //this.setEvents();
    
    //this.showCalendar(this.eventss);
    


    
    
    
    
  }


  public getScheduledAppointmentsFromBloodBank(id:any) {
    this.bloodBankService.getAppointmentsByBloodBankId(id).subscribe(res => {
      this.centerVisits = res;   
      this.eventss = [];
      
      this.centerVisits.forEach(cv => {
        cv.bloodDonationAppointment.startDateTime = new Date(Number(cv.bloodDonationAppointment.startDateTime[0]), Number(cv.bloodDonationAppointment.startDateTime[1]) - 1, Number(cv.bloodDonationAppointment.startDateTime[2]), Number(cv.bloodDonationAppointment.startDateTime[3]), Number(cv.bloodDonationAppointment.startDateTime[4]), 0).toISOString();
        
      });
      
      for(var a of this.centerVisits){      
        this.eventss.push({title: a.bloodDonor.name + ' ' + a.bloodDonor.surname + ' ' + a.bloodDonationAppointment.startDateTime.substring(11, 16) + ' (' + a.bloodDonationAppointment.duration + 'min)', date: a.bloodDonationAppointment.startDateTime});
      }
      
      this.showCalendar(this.eventss);
    })
  }

  
  // public setTermins(){
    
  //   for(let a of this.centerVisits){
  //     this.termin.title = a.bloodDonor.name;
  //     this.termin.date = a.bloodDonationAppointment.startDateTime;
  //     this.termins.push(this.termin);
  //     // this.eventss.push({title: a.bloodDonor.name + ' ' + a.bloodDonor.surname, date: a.bloodDonationAppointment.startDateTime})
  //     // this.eventss.push(this.termin);
  //   }
  // }

  public setEvents2(){
    this.eventss = [];
    
    for(var a of this.centerVisits){      
      this.eventss.push({title: a.bloodDonor.name, date: a.bloodDonationAppointment.startDateTime});
    }
  }

  public setEvents(){
    
     // console.log(cv.bloodDonor.name);
     for(var a of this.centerVisits){
      console.log(a.bloodDonor.name);
     }
    this.eventss.push({title: 'Danilo Bulatovic (30min) 14:00', date: '2023-01-29T10:00:00.000Z'},
                      {title: 'Danilo Bulatovic (10min) 10:00', date: '2023-01-30'},
                      {title: 'Marko Markovic (20min) 11:00', date: '2023-01-28'});
      
    
  }

  public showCalendar(dogadjaji: any){
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin],
      events: dogadjaji,
    }
  }

  
}
