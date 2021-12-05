import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../user";
import {FormControl,  FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user = new User();

  day:number;
  month:number;
  year:number;

  id:number;
  maxYear: number;

  update:FormGroup;

  constructor(private userService:UserService,
              private activatedRoute:ActivatedRoute,
              private route:Router) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id']
    this.userService.getUserById(this.id).subscribe(us=>{
      this.user = us;
      let date = new Date(us.date);
      this.year = date.getUTCFullYear();
      this.month = date.getMonth()+1;
      this.day = date.getUTCDate()+1;
    },error => console.log(error))

    this.maxYear = new Date().getFullYear();

    this.update = new FormGroup({
      'name': new FormControl(''),
      'surname': new FormControl(''),
      'login': new FormControl(''),
      'day': new FormControl(''),
      'month': new FormControl(''),
      'year': new FormControl('')
    })
  }

  onSubmit() {

    let data = Date.UTC(this.year,this.month-1,this.day)
    console.log(data)
    this.user.date = data;
    this.userService.updateUser(this.user,this.id).subscribe(data=>{
      console.log(data)
      this.route.navigate(['users'])
    },error => console.log(error))
  }

  nameValid():boolean {
    if(this.user.name.length == 0)
      return false
    return true
  }

  surnameValid():boolean {
    if(this.user.surname.length == 0)
      return false
    return true
  }

  loginValid():boolean {
    if(this.user.login.length < 5)
      return false
    return true
  }

  monthValid():boolean {
    if(this.month<1 || this.month>12)
      return false
    return true
  }

  dayValid():boolean {
    if(this.day<1 || this.day>31)
      return false
    return true
  }

  yearValid():boolean {
    if(this.year<this.maxYear-100 || this.year>this.maxYear)
      return false
    return true
  }
}
