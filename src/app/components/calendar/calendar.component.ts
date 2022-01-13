import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {LoginService, Usuario} from 'src/app/services/login.service';

//PARA CREAR UNA SESION
import { sha256} from 'js-sha256';
import {FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {

  //VARIABLES
  ListarUsuarios: Usuario[];

  variable = sha256("123");

  user: Usuario={
    id_user:'',
    sesion:'',
  };

  id_user = new FormControl('', [Validators.required]);

//--------------------------------------------------------

  constructor(private LoginService:LoginService, private router:Router) { }

  ngOnInit(): void {
    //this.cargarUsuarios();
  }


  //METODO ENCARGADO DE PREGARCAR TODOS LOS USUARIOS
  cargarUsuarios()
  {
    //SELECT * FROM users
    this.LoginService.getUsers().subscribe(
      res=>{

        //AGREGA LA RESPUESTA A UNA VARIABLE TIPO Usuario
        this.ListarUsuarios=<any>res;
      },
      err => console.log(err)
    );
  }


  getUser(event: Event){
    event.preventDefault();

    //SELECT * FROM users WHERE id_user = input value
    this.LoginService.getUnUser(this.id_user.value).subscribe(
      res=>{

        //ENVIA LA RESPUESTA (OBJETO) A LA VARIABLE
        this.user = res[0];

        //this.ListarUsuarios=<any>res;
        this.modificar();
        
      },
      err => console.log(err)
    );
  }

  modificar(){
    var ahora = new Date();

    //TOMA EL MILISEGUNDO
    var milisegundos = ahora.getMilliseconds();

    //CREA UN HASH
    this.user.sesion= sha256(this.user.sesion+Math.random()+milisegundos); 

    //MODIFICA LA SESION
    this.LoginService.editUser(this.user.id_user, this.user).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    );
  }

  /* recargar(){
    this.router.navigate(["/tareas"]);
    this.cargarUsuarios();
  } */
}
