import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user-regsiter',
  templateUrl: './user-regsiter.component.html',
  styleUrls: ['./user-regsiter.component.css']
})
export class UserRegsiterComponent implements OnInit {
model : User = new User();
retypePassword: string;

constructor(private data : DataService) {}

ngOnInit() {}

registerUser() {

this.data.sayHello();

console.log('the user wants to save another user');
console.log(this.model);

//save the user in the service
this.data.saveUser(this.model);
  }
  
}

