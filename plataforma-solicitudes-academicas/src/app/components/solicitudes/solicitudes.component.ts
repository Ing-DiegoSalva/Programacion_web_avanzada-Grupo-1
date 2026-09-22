import { Component } from '@angular/core';
import { Solicitud } from '../../models/solicitud.model';
import { solicitudes } from '../../models/solicitud-data';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent {

  solicitudes: Solicitud[] = solicitudes;

}