import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import {TodoService, Task} from 'src/app/services/todo.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.sass']
})
export class NewtaskComponent implements OnInit {

  ListarUsuarios: Task[];

  task = new FormGroup({
    id_task: new FormControl('', []),
    nombre: new FormControl('', [Validators.required]),
    description: new FormControl('', []),
    fk_proyecto: new FormControl('', []),
    date: new FormControl('', []),
    realizado: new FormControl('', []),
    prioridad: new FormControl('', [Validators.required]),
  });

  constructor(private TodoService:TodoService, private router:Router) { }

  ngOnInit(): void {
  }

  realizado(s){
    if(s==null || s== ''){
      s = "0";
    }
    return s
  }


  getEmail(event: Event){
    event.preventDefault();

    this.task.value.realizado = this.realizado(this.task.value.realizado);
    this.task.value.fk_proyecto = this.realizado(this.task.value.fk_proyecto);

    console.log(this.task.value);


    this.TodoService.addTask(this.task.value).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }

}
