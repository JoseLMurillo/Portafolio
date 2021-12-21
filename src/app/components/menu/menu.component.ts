import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor() {

   }

  toggleMobileMenu() {
    const menu = document.querySelector("#hamburger-icon");

    if(menu){
      menu.classList.toggle('open');
    }
}

  ngOnInit(): void {
    function Information(){
      let info = document.querySelector("#brandon");
      const tiempoTranscurrido = Date.now();
      const hoy = new Date(tiempoTranscurrido);
      
      if(info){
        info.innerHTML = hoy.toLocaleDateString();
      }
  
      return hoy
    }

    Information()
  }
    
}
