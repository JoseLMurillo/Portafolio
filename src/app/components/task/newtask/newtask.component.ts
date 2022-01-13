import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import {TaskService, Task} from 'src/app/services/task.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.sass']
})
export class NewtaskComponent implements OnInit {

  ListarUsuarios: Task[];

  task = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    description: new FormControl('', []),
    fk_proyecto: new FormControl('', []),
    date: new FormControl('', []),
    realizado: new FormControl('', []),
    prioridad: new FormControl('', [Validators.required]),
  });

  constructor(private TaskService:TaskService, private router:Router) { }

  ngOnInit(): void {
  }

  addTask(event: Event){
    event.preventDefault();

    if(this.task.value.realizado){
      this.task.value.realizado = "1";
    }
    else{
      this.task.value.realizado = "0";
    }

    this.task.value.fk_proyecto = this.realizado(this.task.value.fk_proyecto);

    console.log(this.task.value);

    this.TaskService.addTask(this.task.value).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }


  realizado(s){
    if(s==null || s== ''){
      s = "0";
    }
    return s
  }

}
