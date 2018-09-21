import { Component, OnInit } from '@angular/core';
import { InfoPaginaSevicesService } from '../../services/info-pagina-sevices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public _servicio: InfoPaginaSevicesService) { }

  ngOnInit() {
  }

}
