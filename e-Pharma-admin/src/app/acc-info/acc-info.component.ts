import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginService } from 'app/services/admin-login.service';

@Component({
  selector: 'app-acc-info',
  templateUrl: './acc-info.component.html',
  styleUrls: ['./acc-info.component.css']
})
export class AccInfoComponent implements OnInit {

  reEnter:string;
  newPass:string;
  oldPass:string;

  constructor(private loginService: AdminLoginService,private router: Router) { }

  ngOnInit(): void {
  }

  changePass(event){
    
    event.preventDefault();
    this.oldPass=event.target.old.value;
    this.newPass=event.target.new.value;
    this.reEnter=event.target.re.value;

    if(this.oldPass==""){
      window.alert("Old password cannot be empty")
      return
    }
    if(this.newPass==""){
      window.alert("New password cannot be empty")
      return
    }
    if(this.newPass.length<8){
      window.alert("Passwords is too short")
      return
    }
    if(this.reEnter=="" || this.reEnter!=this.newPass){
      window.alert("Passwords doesn't match")
      return
    }
    var doc = {
      "old_pass":this.oldPass,
      "new_pass":this.newPass,
    }

    this.loginService.adminChangePass(doc).subscribe(


      res => {
        // console.log(res)
        // console.log(res["status"])
        if(res["status"]==202){
          console.log("success")
          this.router.navigate(['/dashboard'])
          
        }
        // else if(res["status"]==401){

        //   console.log("fail")
        //   window.alert("Invalid Credentials")
        // }
      },
      errmsg => {
        
        window.alert("Wrong credentials"+errmsg)
        
    },
    );

    console.log(this.newPass+this.oldPass+this.reEnter)
  }

}
