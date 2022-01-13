import { Component, OnInit } from '@angular/core';
import {Task, TaskService} from '../../../services/task.service';
import {Router, ActivatedRoute} from '@angular/router'; 
import {FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.sass']
})
export class EdittaskComponent implements OnInit {

  constructor(private TaskService:TaskService,
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

    setValue() {
      this.task.setValue({
        id_task: this.equipo.id_task,
        nombre: this.equipo.nombre,
        description: this.equipo.description,
        fk_proyecto: this.equipo.fk_proyecto,
        date: this.equipo.date,
        realizado: this.equipo.realizado,
        prioridad: this.equipo.prioridad,
      })
    }
    

    
  ngOnInit(): void {
    const id_entrada = <string>this.activeRoute.snapshot.params.id;
    console.log('id de entrada: '+id_entrada);

    if(id_entrada){
      this.TaskService.getUnaTask(id_entrada).subscribe(
        res=>{
          this.ListarUsuarios=<any>res;
          
          this.equipo = <any>res[0];

          this.setValue();
        },
        err=>console.log(err)
      );
    }
  }

  
  modificar(id:string){

  }

  realizado(s){
    if(s==null || s== ''){
      s = "0";
    }
    return s
  }

  getTask(event: Event){
    event.preventDefault();

    if(this.task.value.realizado){
      this.task.value.realizado = "1";
    }
    else{
      this.task.value.realizado = "0";
    }

    this.task.value.fk_proyecto = this.realizado(this.task.value.fk_proyecto);

    console.log(this.task.value);


    this.TaskService.editTask(this.equipo.id_task, this.task.value).subscribe(
      res => {
        console.log(res);
        this.recargar();
      },
      err => console.log(err)
    )
  }

  delete(id:string){
    this.TaskService.deleteTask(this.equipo.id_task).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }

  eliminar(id:string)
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
    this.router.navigate(["/tareas"]);
  }

}
