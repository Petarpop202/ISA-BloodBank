import { getSafePropertyAccessString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/model/test';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  
  constructor(private userService:UserService) { }
  tests: Test[] = [];

  ngOnInit(): void {
    this.jebo();
  }

  public jebo(): void {
    this.userService.getTests().subscribe(res => {
      this.tests = res;
    })
  }

}
