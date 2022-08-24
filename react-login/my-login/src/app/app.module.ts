import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AuthenPageComponent } from './authen-page/authen-page.component';
import { FallComponent } from './fall_register/fall.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FallLoginComponent } from './fall-login/fall-login.component';
import { SuccessComponent } from './success/success.component';
import { AuthenComponent } from './authen/authen.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthenPageComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AuthenComponent,
    FallComponent,
    FallLoginComponent,
    SuccessComponent,
    ContactComponent,
    AboutUsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
