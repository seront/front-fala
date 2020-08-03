import { NgModule } from '@angular/core';
import { RentaComponent } from './renta.component';
import { RentaFormComponent } from 'src/app/components/renta-form/renta-form.component';
import { RentaRoutingModule } from './renta.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [CommonModule, RentaRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [RentaComponent, RentaFormComponent]
})
export class RentaModule {}
