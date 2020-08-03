import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConectionService {
  rut: any;
  celular: any;
  email: any;
  renta: any;

  constructor(private http: HttpClient) { }

  setParams(rut, celular, email) {
    this.rut = rut;
    this.celular = celular;
    this.email = email;
  }
  setRenta(renta) {
    this.renta = renta;
  }
  checkStatus(): boolean {
    if (this.rut && this.celular && this.email) {
      return true;
    } else {
      return false;
    }
  }

  async sendRequest(renta): Promise<any> {
    const data = {
      rut: this.rut,
      celular: this.celular,
      email: this.email,
      renta,
    };
    console.log('sendRequest', data);
    return this.http.post(`${environment.apiEndpoint}/validaSolicitud`, data).toPromise();
  }
}
