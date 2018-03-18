import { Component, OnInit } from '@angular/core';
import { Body } from './body';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  public tableData: Body[] = [
    {firstname: 'michelle', lastname:'gu', username:'mich', email:'m_g@gmail.com', password:'michy'},
    {firstname: 'akshay', lastname:'bains', username:'Akshay_b', email:'akshay_paji@gmail.com', password:'akshay'}
];

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(temp: Body){
    this.tableData.push({firstname: temp.firstname, lastname: temp.lastname, username: temp.username, email: temp.email, password:temp.password});
    console.log(this.tableData);
  }

}
