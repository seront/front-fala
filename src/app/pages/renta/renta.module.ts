import { NgModule } from '@angular/core';
import { RentaComponent } from './renta.component';
import { RentaFormComponent } from 'src/app/components/renta-form/renta-form.component';
import { RentaRoutingModule } from './renta.routing.module';


@NgModule({
    imports: [RentaRoutingModule],
  declarations: [RentaComponent, RentaFormComponent]
})
export class RentaModule {}
