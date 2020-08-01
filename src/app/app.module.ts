import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { RentaComponent } from './pages/renta/renta.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RentaComponent,
    MainHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
