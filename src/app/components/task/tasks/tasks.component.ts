import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {TaskService, Task} from 'src/app/services/task.service';

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

  constructor(private TaskService:TaskService, private router:Router) { }

  ngOnInit(): void {
    this.listarEquipo();
  }

  listarEquipo()
  {
    this.TaskService.getTask().subscribe(
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

    /* this.TaskService.editTask(this.task.value.id_task, this.task.value).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    ); */
  }

  delete(id:string)
  {
    this.TaskService.deleteTask(id).subscribe(
      res=>{
        console.log(res);
        this.recargar();
      },
      err=> console.log(err)
      );
  }

  recargar(){
    this.router.navigate(["/calendar"]);
  }
}
