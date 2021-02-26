import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines = [{
        titulo: 'Spider man - Far from home',
        fechaLanzamiento: new Date(),
        precio: 200,
      },
      {
        titulo: 'Moana',
        fechaLanzamiento: new Date('2016-11-13'),
        precio: 300.99
      }]
    }, 3000);
  }

  title = 'el valor que yo quiera';

  peliculasEnCines;

  peliculasProximosEstrenos = []

  duplicarNumero(valor: number){
    return valor * 2;
  }
}

