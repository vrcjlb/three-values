import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  news = [
    {
      title: '¡DESCUBRE NUESTRA NUEVA SECCIÓN DE SERVICIOS A MEDIDA!',
      sub: 'Encuentra ofertas y productos a tu medida'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
