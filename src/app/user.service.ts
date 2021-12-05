import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getusers():Observable<User[]>{
    return this.httpClient.get<User[]>('http://localhost:8080/api/users');
  }

  deleteUser(id:number):Observable<Object>{
    return this.httpClient.delete('http://localhost:8080/api/users/'+id)
  }

  createUser(user:User):Observable<User>{
    return this.httpClient.post<User>('http://localhost:8080/api/users',user);
  }

  getUserById(id:number):Observable<User>{
    return this.httpClient.get<User>('http://localhost:8080/api/users/'+id)
  }

  updateUser(user:User,id:number):Observable<User>{
    return this.httpClient.put<User>('http://localhost:8080/api/users/'+id,user)
  }
}
