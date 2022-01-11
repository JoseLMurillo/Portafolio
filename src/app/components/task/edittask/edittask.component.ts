import { Component, OnInit } from '@angular/core';
import {Task, TodoService} from './../../../services/todo.service';
import {Router, ActivatedRoute} from '@angular/router'; 
import {FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.sass']
})
export class EdittaskComponent implements OnInit {

  constructor(private TodoService:TodoService,
    private router:Router,
    private activeRoute:ActivatedRoute) { }

    ListarUsuarios: Task[];

    equipo: Task={
      id_task:'',
      nombre:'',
      description:'',
      fk_proyecto:'',
      date:'',
      realizado: '',
      prioridad:'',
    };

    task = new FormGroup({
      id_task: new FormControl('', []),
      nombre: new FormControl('', [Validators.required]),
      description: new FormControl('', []),
      fk_proyecto: new FormControl('', []),
      date: new FormControl('', []),
      realizado: new FormControl('', []),
      prioridad: new FormControl('', [Validators.required]),
    });

  ngOnInit(): void {
    const id_entrada = <string>this.activeRoute.snapshot.params.id;
    console.log('id de entrada: '+id_entrada);

    if(id_entrada){
      this.TodoService.getUnaTask(id_entrada).subscribe(
        res=>{
          this.ListarUsuarios=<any>res;

          this.equipo = res[0];
          console.log(res[0]);
        },
        err=>console.log(err)
      );
    }
  }

  modificar(id:string){

  }

}
