import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConectionService {
  rut: string;
  celular: string;
  email: string;
  renta: string;

  constructor(private http: HttpClient) { }

  setParams(rut: string, celular: string, email: string) {
    this.rut = rut;
    this.celular = celular;
    this.email = email;
  }
  setRenta(renta: string) {
    this.renta = renta;
  }
  checkStatus(): boolean {
    if (this.rut && this.celular && this.email) {
      return true;
    } else {
      return false;
    }
  }

  async sendRequest(renta: any): Promise<any> {
    const data = {
      rut: this.rut,
      celular: this.celular,
      email: this.email,
      renta,
    };
    return this.http.post(`${environment.apiEndpoint}/validaSolicitud`, data).toPromise();
  }
}
