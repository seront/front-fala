import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{
  path: '',
  component: LandingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
