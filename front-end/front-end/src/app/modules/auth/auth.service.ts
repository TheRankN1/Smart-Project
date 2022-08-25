import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  public register(username: string, password: string , confirmPassword:string){
    return this.http.post(
      'http://localhost:3222/api/auth/register' , {
        username,
        password,
        confirmPassword,
      }
    );
  }

  public login(username: string, password: string) {
    return this.http.post('http://localhost:3222/api/auth/login', {
      username,
      password,
    });
  }
}
