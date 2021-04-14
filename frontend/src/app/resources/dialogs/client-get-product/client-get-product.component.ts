import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-client-get-product',
  templateUrl: './client-get-product.component.html',
  styleUrls: ['./client-get-product.component.scss']
})
export class ClientGetProductComponent implements OnInit {

  today = new Date();

  fullname = '';
  form = new FormGroup({
    document: new FormControl(''),
    phone: new FormControl(''),
  });

  constructor(public dialogRef: MatDialogRef<ClientGetProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data)
    this.fullname = data.fullName ? ', ' + data.fullName : '';
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    console.log('para cerrar presiona el boton X')
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    if (this.form.controls['document'].value && this.form.controls['phone'].value)
      this.dialogRef.close(this.form.value);
    else
      this.dialogRef.close();
  }

}
