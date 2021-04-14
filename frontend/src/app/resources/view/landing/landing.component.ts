import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../../commons/utils/http-service.service'
import { ClientGetProductComponent } from './../../../resources/dialogs/client-get-product/client-get-product.component'
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  UserLogin: any;
  productsList: IProduct[];
  news = [
    {
      title: '¡DESCUBRE SERVICIOS Y PRODUCTOS A MEDIDA!',
      sub: 'Ingresa con tu red social favorita y descrube productos para ti'
    }
  ]

  constructor(public dialog: MatDialog, private service: HttpService, private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

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
    console.log(body)
    this.UserLogin = body;
    this.service.post('http://e133eeff9442.ngrok.io/servicios/personalizado', body).subscribe(
      (result: IProduct[]) => {
        if (result.length > 0)
          this.productsList = result;
      }
    )
  }
  
  disableLoading() {
    document.getElementById('lds-roller').classList.remove('show');
  }

  getService(product) {
    console.log(this.UserLogin)
    const dialogRef = this.dialog.open(ClientGetProductComponent, {
      width: '400px',
      data: {
        fullName: this.UserLogin ? this.UserLogin.first_name + ' ' + this.UserLogin.last_name : '',
        product
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.post('http://e133eeff9442.ngrok.io/client/appointment', result).subscribe(
          (result: any) => {
            this.openSnackBar('Excelente!, ya agendamos tu solicitud, en breve nos comunicaremos contigo', '');
          },
          (err: any) => {
            this.disableLoading()
            this.openSnackBar('Excelente!, ya agendamos tu solicitud, en breve nos comunicaremos contigo', '');
          }
        )
      }
    });
  }
}
