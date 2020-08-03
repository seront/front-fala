import { NgModule } from '@angular/core';
import { LandingComponent } from './landing.component';
import { MainFormComponent } from 'src/app/components/main-form/main-form.component';
import { LandingRoutingModule } from './landing.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [CommonModule, LandingRoutingModule, FormsModule, ReactiveFormsModule],
    declarations: [LandingComponent, MainFormComponent],
})
export class LandingModule { }
