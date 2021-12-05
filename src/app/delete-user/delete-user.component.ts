import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  id:number;

  constructor(private userService:UserService,
              private activatedRouting:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.id = this.activatedRouting.snapshot.params['id'];
    this.userService.deleteUser(this.id).subscribe(data=>{
      this.router.navigate(['users'])
    },error => console.log(error))



  }

}
