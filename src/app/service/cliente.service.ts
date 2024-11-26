import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConsultarClienteDTO } from '../dto/consultar-cliente-dto';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:8080/api/cliente';

  constructor(private http: HttpClient) { }

  consultarCliente(consultarClienteDTO: ConsultarClienteDTO): Observable<Cliente> {
    const tipoDocumento = consultarClienteDTO.tipoDocumento;
    const numeroDocumento = consultarClienteDTO.numeroDocumento;
    return this.http.get<Cliente>(`${this.apiUrl}/consultar?tipoDocumento=${tipoDocumento}&numeroDocumento=${numeroDocumento}`);
  }
}
