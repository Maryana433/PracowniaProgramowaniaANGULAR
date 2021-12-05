import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from "./user-list/user-list.component";
import {DeleteUserComponent} from "./delete-user/delete-user.component";
import {CreateUserComponent} from "./create-user/create-user.component";
import {UpdateUserComponent} from "./update-user/update-user.component";


const routes: Routes = [
  {path:'users',component:UserListComponent},
  {path:'create-user',component:CreateUserComponent},
  {path:'delete-user/:id',component:DeleteUserComponent},
  {path:'update-user/:id',component:UpdateUserComponent},
  {path:'',redirectTo:'users',pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
