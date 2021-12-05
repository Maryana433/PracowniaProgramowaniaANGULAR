import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:User[]

  constructor(private userService:UserService,private route:Router) { }

  ngOnInit(): void {
    this.userService.getusers().subscribe(data=>{
      this.users=data
    },error => console.log(error))
  }

  convertNumberinMillsToDate(data:number):string{
    //console.log(data)
    let date = new Date(data);
    //console.log(normal.toDateString())
    //return normal.toDateString() +"  --- D/M/Y "+normal.getUTCDate()+"/"+(normal.getMonth()+1)+"/"+normal.getFullYear();
    // беру подстроку чтобы не было видно дня недели ( первые три знака )
    let dateStrinf = date.toDateString().substr(3);
    return dateStrinf;

  }

  deleteUser(id: number) {
    this.route.navigate(['delete-user',id])
  }

  updateUser(id: number) {
    this.route.navigate(['update-user',id])
  }
}
