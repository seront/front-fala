import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FormButtonComponent } from './form-button/form-button.component';
import { MainFormComponent } from './main-form/main-form.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { RentaFormComponent } from './renta-form/renta-form.component';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    FormButtonComponent,
    MainFormComponent,
    MainHeaderComponent,
    RentaFormComponent
  ],
  declarations: [
    FormButtonComponent,
    MainFormComponent,
    MainHeaderComponent,
    RentaFormComponent
  ]
})
export class ComponentsModule { }
