import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  getAllUser() {
    return this.http.get<any>(this.userUrl);
  }
  addUser(user: User) {
    return this.http.post<any>(this.userUrl, user);
  }

  deleteUser(id: Number) {
    return this.http.delete<any>(this.userUrl +'/'+ id);
  }
}
