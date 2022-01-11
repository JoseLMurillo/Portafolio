import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url='/api2';

  constructor(private http: HttpClient) { }

  //get equipos
  getTask()
  {
    return this.http.get(this.url);
  }


  //get un Equipo
  getUnaTask(id:string){
    return this.http.get(this.url+'/'+id);
  }


  //agregar equipo
  addTask(equipo:Task)
  {
    return this.http.post(this.url, equipo);
  }


  //eliminar
  deleteTask(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //modificar equipo
  editTask(id_task:string, equipo:Task){
    return this.http.put(this.url+'/'+id_task, equipo);
  }

}

export interface Task{
  id_task?:string;
  nombre?:string;
  description?:string;
  fk_proyecto?:string;
  date?:string;
  realizado?:string;
  prioridad?:string;
}
