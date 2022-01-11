import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url='/api';
  constructor(private http: HttpClient) { }


  //get equipos
  getUsers()
  {
    return this.http.get(this.url);
  }


  //get un Equipo
  getUnUser(id:string){
    return this.http.get(this.url+'/'+id);
  }


  //agregar equipo
  /* addEquipo(equipo:Equipo)
  {
    return this.http.post(this.url, equipo);
  } */


  //eliminar
  deleteUser(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //modificar equipo
  editUser(id:string, equipo:Usuario){
    return this.http.put(this.url+'/'+id, equipo);
  }

}

export interface Usuario{
  id_user?:string;
  sesion?:string;
}
