import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { DisplaydataComponent } from './displaydata/displaydata.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/form'},
  {path:'form',component:ReactiveformComponent},
  {path:'display',component:DisplaydataComponent},
  {path:'form/:id',component:ReactiveformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
