import { NgModule } from '@angular/core';
import { RentaComponent } from './renta.component';
import { RentaFormComponent } from 'src/app/components/renta-form/renta-form.component';
import { RentaRoutingModule } from './renta.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
    imports: [
      CommonModule,
      RentaRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      ComponentsModule
    ],
  declarations: [RentaComponent]
})
export class RentaModule {}
