import { Component, OnInit } from '@angular/core';
import { ConectionService } from 'src/app/utils/conection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-renta-form',
  templateUrl: './renta-form.component.html',
  styleUrls: ['./renta-form.component.scss']
})
export class RentaFormComponent implements OnInit {

  valid = false;
  renta;
  showAlert = false;
  alertType = '';
  mensaje1 = '';
  mensaje2 = '';

  constructor(private conection: ConectionService,
              private router: Router) { }

  ngOnInit() {
  }

  check() {
    if (this.renta !== undefined && this.renta !== '') {
      this.valid = true;
    }
  }

  async continuar() {
    this.valid = false;
    try {
      const response = await this.conection.sendRequest(this.renta);
      this.exito();
    } catch {
      console.log('Error al guardar la solicitud');
      this.mostrarError();
    }
  }

  mostrarError() {
    this.alertType = 'alert-danger';
    this.mensaje1 = 'Error!';
    this.mensaje2 = ' hemos tenido un problema, intente mas tarde';
    this.showAlert = true;
    this.sleep(3000).then(() => {
      this.showAlert = false;
      this.router.navigate(['']);
    });
  }

  exito() {
    this.alertType = 'alert-success';
    this.mensaje1 = 'Exito!';
    this.mensaje2 = ' Estamos procesando su solicitud, muchas gracias';
    this.showAlert = true;
    this.sleep(3000).then(() => {
      this.showAlert = false;
      this.router.navigate(['']);
    });
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
