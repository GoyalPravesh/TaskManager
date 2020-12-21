import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router) { }
  onLogin(mail: string , pass: string){
    if(mail=='')
    alert("you can't be anonymous")
    else if(pass.length<=6)
    alert("keep a strong password");
    else if(mail && pass.length>6)
    this.router.navigate(['/tasks']);
  }
  ngOnInit() {
  }

}
