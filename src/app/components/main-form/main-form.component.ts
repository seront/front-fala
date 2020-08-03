import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ConectionService } from 'src/app/utils/conection.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {
  form: FormGroup;
  constructor(private fromBuilder: FormBuilder,
              private router: Router,
              private conection: ConectionService) { }

  ngOnInit() {
    this.form = this.fromBuilder.group({
      rut: ['', Validators.required],
      celular: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  continuar() {
    const { rut, celular, email } = this.form.getRawValue();
    console.log(this.form.valid, rut, celular, email);
    this.conection.setParams(rut, celular, email);
    this.router.navigate(['renta']);
  }

}
