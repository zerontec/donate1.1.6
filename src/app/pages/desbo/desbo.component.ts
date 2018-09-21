import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HeroesService } from '../../services/heroes.service';
import {HeroesData} from '../../interfaces/heroes-interfaces';


@Component({
  selector: 'app-desbo',
  templateUrl: './desbo.component.html',
  styleUrls: ['./desbo.component.css']
})
export class DesboComponent implements OnInit {

  constructor( private heroesServices: HeroesService ) { }

  ngOnInit() {
   
  }


}
