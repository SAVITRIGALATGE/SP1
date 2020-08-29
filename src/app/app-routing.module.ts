import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchInfoComponent } from './launch-info/launch-info.component';

const routes: Routes = [
  {
    path:'',
    component:LaunchInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
