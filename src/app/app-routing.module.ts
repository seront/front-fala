import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule)
},
{
  path: 'renta',
  loadChildren: () => import('./pages/renta/renta.module').then(m => m.RentaModule)
},
{
  path: '**',
  redirectTo: '',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
