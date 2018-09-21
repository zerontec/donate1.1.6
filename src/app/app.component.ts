import { Component } from '@angular/core';
import { InfoPaginaSevicesService } from './services/info-pagina-sevices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor (public infopaginaServices: InfoPaginaSevicesService){

  
 }
}
