import { NgModule } from '@angular/core';
import { LandingComponent } from './landing.component';
import { MainFormComponent } from 'src/app/components/main-form/main-form.component';
import { LandingRoutingModule } from './landing.routing.module';


@NgModule({
    imports: [LandingRoutingModule],
    declarations: [LandingComponent, MainFormComponent],
})
export class LandingModule { }
