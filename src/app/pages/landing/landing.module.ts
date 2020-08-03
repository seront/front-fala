import { NgModule } from '@angular/core';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
    imports: [
        CommonModule,
        LandingRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ComponentsModule],
    declarations: [LandingComponent],
})
export class LandingModule { }
