import { Component, OnInit } from '@angular/core';
import { InfoPaginaSevicesService } from '../../services/info-pagina-sevices.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  anio: number = new Date().getFullYear();
  constructor( public _servicio: InfoPaginaSevicesService) { }

  ngOnInit() {
  }

}
