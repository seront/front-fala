import { Component, OnInit } from '@angular/core';
import { ConectionService } from 'src/app/utils/conection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-renta',
  templateUrl: './renta.component.html',
  styleUrls: ['./renta.component.scss']
})
export class RentaComponent implements OnInit {

  valid = false;
  renta;

  constructor(private conection: ConectionService,
              private router: Router) { }

  ngOnInit() {
    if (!this.conection.checkStatus()) {
      // Regresar a la pagina inicial
      console.log('Salir a la principal');
      this.router.navigate(['']);
    }
  }

  check() {
    if (this.renta !== undefined && this.renta !== '') {
      this.valid = true;
    }
  }

  async continuar() {
    const response = await this.conection.sendRequest(this.renta);
  }

}
