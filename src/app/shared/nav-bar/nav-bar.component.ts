import { Component, OnInit } from '@angular/core';
import { InfoPaginaSevicesService } from '../../services/info-pagina-sevices.service';
import { AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public isLogin: boolean;
  public nombreuser: string;
  public emailUser: string;
  public fotoUser: string;



  constructor( public _servicio: InfoPaginaSevicesService, public authServicio: AuthService) { }

  ngOnInit() {
this.authServicio.getAuth().subscribe( auth => {
if (auth){
this.isLogin = true;
this.nombreuser = auth.displayName;
this.emailUser = auth.email;
this.fotoUser = auth.photoURL;


} else {

  this.isLogin = false;
}

});

}

onClickLogout(){

  this.authServicio.logout();
}



}
