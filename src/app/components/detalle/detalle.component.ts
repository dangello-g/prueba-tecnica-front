import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../service/cliente.service';
import { ConsultarClienteDTO } from '../../dto/consultar-cliente-dto';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {

  cliente: Cliente | undefined;
  errorMessage: string = '';
  consultarClienteDTO: ConsultarClienteDTO;

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) {
    this.consultarClienteDTO = new ConsultarClienteDTO();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const tipoDocumento = params['tipoDocumento'];
      const numeroDocumento = params['numeroDocumento'];

      if (tipoDocumento && numeroDocumento) {
        this.consultarClienteDTO.tipoDocumento = tipoDocumento;
        this.consultarClienteDTO.numeroDocumento = numeroDocumento;

        this.clienteService.consultarCliente(this.consultarClienteDTO)
          .subscribe({
            next: (data) => {
              this.cliente = data;
            },
            error: (error) => {
              this.errorMessage = 'Error al cargar los detalles del documento';
              console.error('Error:', error);
            }
          });
      }
    });
  }
}
