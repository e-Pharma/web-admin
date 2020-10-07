import { Component, OnInit } from "@angular/core";
import { AdminLoginService } from "app/services/admin-login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin-login",
  templateUrl: "./admin-login.component.html",
  styleUrls: ["./admin-login.component.css"],
})
export class AdminLoginComponent implements OnInit {
  constructor(private loginService: AdminLoginService, private router: Router) {}
  statuscode: Number;
  errMsg: string;
  ngOnInit(): void {
    this.active=false;
  }
  active:boolean;


  login(event) {
    event.preventDefault();
    this.active = true;
    // var target = event.target
    // const username = target.getElementById('username')
    var username = event.target.username.value
    var password = event.target.password.value
    if(username==""){
      window.alert("Username cannot be empty")
      return
    }
    if(password==""){
      window.alert("Password cannot be empty")
      return
    }
    // console.log(username)
    this.loginService.adminLogin(username, password).subscribe(
      // (res) => (
      //   (this.statuscode = res["data"]["statuscode"]), 
      //   (console.log(res))
      // ),
      // (errmsg) => (this.errMsg = <any>errmsg)

      res => {
        // console.log(res)
        // console.log(res["status"])
        if(res["status"]==200){
          console.log("success")
          this.router.navigate(['/dashboard'])
          this.active=false
        }
        // else if(res["status"]==401){

        //   console.log("fail")
        //   window.alert("Invalid Credentials")
        // }
      },
      errmsg => {
        window.alert("Invalid Credentials"),
        this.active=false
      }
    );
  } 
}
