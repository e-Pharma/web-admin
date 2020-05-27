import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  User:any = [];

  constructor(private userService: UserService) {
    this.readUser();
   }

  ngOnInit(): void {}

  readUser(){
    this.userService.getUsers().subscribe((data)=>{
      this.User = data;
    });
  }

}
