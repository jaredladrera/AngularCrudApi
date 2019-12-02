import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http: HttpClient) { }

  productObj: object = [];
  confirmationMessage = 'New Product has been added';
  isAdded: boolean = false; 

  ngOnInit() {
  }

  //save the data
  addNewProduct = () => {
      this.productObj = {
        "name": $('#name').val(),
        "color": $('#color').val()
      }

      console.log("hello");

      this.http.post('http://localhost:5555/products/', this.productObj).subscribe((data) => {
        this.isAdded = true
      });
  }



}
