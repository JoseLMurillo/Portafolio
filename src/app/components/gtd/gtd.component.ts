import { Component, OnInit } from '@angular/core';
import { LoginService, Usuario} from 'src/app/services/login.service';
import { Router} from '@angular/router';
import {FormControl, Validators } from '@angular/forms';
import { sha256, sha224 } from 'js-sha256';


@Component({
  selector: 'app-gtd',
  templateUrl: './gtd.component.html',
  styleUrls: ['./gtd.component.sass']
})
export class GtdComponent implements OnInit {

  //Sha256
  variable = sha256("123");

  
  ListarUsuario: Usuario[];

  equipo: Usuario={
    id:'',
    session_id:'',
  };

  //VALIDA LA ENTRADA DE DATOS
  emailCtrl = new FormControl('', [Validators.required]);


  //TOMA LA ENTRADA Y LA PROCESA
  getEmail(event: Event) {
    event.preventDefault();

    this.LoginService.getUnUser(this.emailCtrl.value).subscribe(
      res=>{
        console.log(res);
        this.equipo = res[0];
        console.log(res[0]);

        this.ListarUsuario=<any>res;

        //LLAMA AL METODO ACTUALIZAR

      },
      err => console.log(err)
    );

    console.log(this.emailCtrl.value);
  }













  //ACTIALIZA LOS DATOS
  updateSesion(){
    
    console.log("equipo"+this.equipo.session_id)
    this.LoginService.editUser(this.equipo.id, this.equipo).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    );

    this.router.navigate(['/gtd']);
  }


















  constructor(private LoginService:LoginService, private router:Router) { 
  }


  ngOnInit(): void {
    this.listarUser();
  }

  listarUser()
  {
    this.LoginService.getUsers().subscribe(
      res=>{
        console.log(res);
        this.ListarUsuario=<any>res;
      },
      err => console.log(err)
    );
  }

  ValidarUsuario()
  { 

  }
}