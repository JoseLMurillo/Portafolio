import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-gtd',
  templateUrl: './gtd.component.html',
  styleUrls: ['./gtd.component.sass']
})
export class GtdComponent implements OnInit {

  emailCtrl= new FormControl('', [Validators.required]);


  constructor() { 
  }


  ngOnInit(): void {
  }

  //metodo
  getCC(event: Event){
    event.preventDefault();
    console.log(this.emailCtrl.value);
  }

}
