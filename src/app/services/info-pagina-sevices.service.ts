import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina';
import { HttpClient } from '@angular/common/http'; //'selenium-webdriver/http';

@Injectable()
export class InfoPaginaSevicesService {


  info: InfoPagina = {};
  cargada = false;
  infohome: any[] = [];

  constructor(private http: HttpClient ) { 

this.cargarInfo();


  }

  private cargarInfo(){

this.http.get('assets/data/data-pagina.json')
.subscribe ((resp: InfoPagina) => {
//this.cargada = true
this.info = resp;
console.log(resp);

});

  }



}


