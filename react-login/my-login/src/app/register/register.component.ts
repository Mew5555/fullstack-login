
import { Component,OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterModel } from '../model/register.model';
import { AuthenService } from '../service/authen.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public form: RegisterModel = new RegisterModel();
  public isSubmit: boolean=false;
  constructor(private authenService: AuthenService, private router: Router) {}
  ngOnInit(): void {
     console.log(this.form);  
    }

  register() {
    this.isSubmit=true;
    console.log('check');
    if (this.form.firstname
      && this.form.lastname
      && this.form.email
      && this.form.username
      && this.form.password.length > 0) {
      console.log('check2')
      const response = this.authenService
        .checkRegister(this.form)
        .then((res: any) => {
          console.log(res);

          if (res.status == true) {
            console.log('Username succes');
            this.router.navigate(['/succeed']);
          } else if (res.status == false) {
            console.log('Username already exist');
            this.router.navigate(['/error']);
          }
        });
    }
  }
}
