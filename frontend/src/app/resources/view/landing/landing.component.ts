import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../../commons/utils/http-service.service'


export interface ISubProduct {
  _id: string,
  name: string,
  description: string
}

export interface IProduct {
  _id: string,
  name: string,
  description: string,
  banner: string,
  subProducts: ISubProduct[]
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  productsList: IProduct[];
  news = [
    {
      title: '¡DESCUBRE SERVICIOS Y PRODUCTOS A MEDIDA!',
      sub: 'Ingresa con tu red social favorita y descrube productos para ti'
    }
  ]

  constructor(private service: HttpService) { }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.service.get('http://e133eeff9442.ngrok.io/servicios').subscribe(
      (result: IProduct[]) => {
        this.productsList = result;
      }
    )
  }

  getPersonalized(body: any) {
    this.service.post('http://e133eeff9442.ngrok.io/servicios/personalizado', body).subscribe(
      (result: IProduct[]) => {
        this.productsList = result;
      }
    )
  }

}
