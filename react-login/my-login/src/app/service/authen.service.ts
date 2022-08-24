import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Data } from '@angular/router';
import { RegisterModel } from '../model/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  constructor(private http: HttpClient) { }

  public async checkRegister(data: RegisterModel ) {
    return new Promise(resolve => {
      try {
        const res = this.http.post('http://localhost:3000/auth/register',data).subscribe((res)=>{
          console.log(res)
          resolve(res)
        });
      }catch (error) {
        return error;
      }
    })
  }

  public async checkLogin(username: string, password: string): Promise<object>{
    return new Promise(resolve => {
      try {
        const res = this.http.post('http://localhost:3000/auth/login', {
          "username": username,
          "password": password,
        }).subscribe((res)=> {
          console.log(res)
          resolve(res)
        });
      } catch (error) {
        return error;
      }
    })
  }
  public async checkVideo(flie: FormData) {
    return new Promise(resolve => {
      try {
        const res = this.http.post('http://localhost:3000/video/upload',flie).subscribe((res)=>{
          console.log(res)
          resolve(res)
        });
      }catch (error) {
        return error;
      }
    })
  }
}
