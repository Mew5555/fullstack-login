import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../service/authen.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string = '';
  public password: string = '';
  error: boolean = false;

  ngOnInit(): void{
  }
  constructor(private authenService: AuthenService,private router: Router) { }

  public async logIn() {
    
    await this.authenService.checkLogin(this.username, this.password).then((res: any) => {
      console.log(res);
   
      if (res.status == true) {
        console.log("Suscess");
        this.router.navigate(['/home']);


      } else if (res.status == false){
        console.log("Try agian.");
        this.router.navigate(['/error1']);
      }
     });
  }
}
