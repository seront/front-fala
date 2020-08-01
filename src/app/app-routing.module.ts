import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { RentaComponent } from './pages/renta/renta.component';


const routes: Routes = [{
  path: '',
  component: LandingComponent
},
{
  path: 'renta',
  component: RentaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
