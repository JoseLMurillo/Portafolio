import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {TodoService, Task} from 'src/app/services/todo.service';

import {FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {

  ListarUsuarios: Task[];

  id_task = new FormControl('', []);

  equipo: Task={
    id_task:'',
    nombre:'',
    description:'',
    fk_proyecto:'',
    date:'',
    realizado: '',
    prioridad:'',
  };

  constructor(private TodoService:TodoService, private router:Router) { }

  ngOnInit(): void {
    this.listarEquipo();
  }

  listarEquipo()
  {
    this.TodoService.getTask().subscribe(
      res=>{
        console.log(res);
        this.ListarUsuarios=<any>res;
      },
      err => console.log(err)
    );
  }


  modificar(id:string){
    console.log(id);
    this.router.navigate(['/edit/'+id]);

    

    /* this.TodoService.editTask(this.task.value.id_task, this.task.value).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    ); */
  }

  eliminar(){
    
  }
}
