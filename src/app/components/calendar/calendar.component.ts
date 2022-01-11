import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {LoginService, Usuario} from 'src/app/services/login.service';

import { sha256, sha224 } from 'js-sha256';
import {FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {

  ListarUsuarios: Usuario[];

  variable = sha256("123");

  emailCtrl = new FormControl('', [Validators.required]);

  equipo: Usuario={
    id_user:'',
    sesion:'',
  };


  constructor(private LoginService:LoginService, private router:Router) { }

  ngOnInit(): void {
    this.listarEquipo();
  }

  listarEquipo()
  {
    this.LoginService.getUsers().subscribe(
      res=>{
        console.log(res);
        this.ListarUsuarios=<any>res;
      },
      err => console.log(err)
    );
  }

  recargar(){
    this.router.navigate(["/items"]);
    this.listarEquipo();
  }

  getEmail(event: Event){
    event.preventDefault();

    this.LoginService.getUnUser(this.emailCtrl.value).subscribe(
      res=>{

        this.equipo = res[0];
        console.log(res[0]);

        this.modificar();

        //console.log(res);
        this.ListarUsuarios=<any>res;
        this.recargar();
        
      },
      err => console.log(err)
    );

    
  }

  modificar(){

    var ahora = new Date();
    var milisegundos = ahora.getMilliseconds();

    this.equipo.sesion= sha256(this.equipo.sesion+Math.random()+milisegundos); 

    console.log(this.equipo.sesion);

    this.LoginService.editUser(this.equipo.id_user, this.equipo).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    );
  }

  

}
