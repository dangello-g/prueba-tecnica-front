import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ConsultarClienteDTO } from '../../dto/consultar-cliente-dto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  consultarClienteDTO: ConsultarClienteDTO;

  constructor(
    private router: Router
  ) {
    this.consultarClienteDTO = new ConsultarClienteDTO();
  }

  public buscar() {
    this.router.navigate(['/detalle'], {
      queryParams: {
        tipoDocumento: this.consultarClienteDTO.tipoDocumento,
        numeroDocumento: this.consultarClienteDTO.numeroDocumento
      }
    });
  }

  public validarTipoDocumento() {
    const tipoDocumento = this.consultarClienteDTO.tipoDocumento;
    return tipoDocumento === 'C' || tipoDocumento === 'P';
  }

  public validarNumeroDocumento() {
    const numeroDocumento = this.consultarClienteDTO.numeroDocumento;
    return !!(numeroDocumento &&
      numeroDocumento.toString().length >= 8 &&
      numeroDocumento.toString().length <= 11
    );
  }

  public validarFormulario() {
    return this.validarTipoDocumento() && this.validarNumeroDocumento();
  }

}
