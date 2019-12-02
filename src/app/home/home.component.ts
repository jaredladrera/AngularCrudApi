import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  product: any = [];
  id: number;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  baseUrl = 'http://localhost:5555/products';

  constructor(private http: HttpClient) { }

  fetchData(){
    this.http.get(this.baseUrl).subscribe((data) => this.product = data)
  }

  ngOnInit() {
    this.fetchData();

    this.http.put(`${this.baseUrl}/7`, { 'name': 'cup', 'color': 'green' }).subscribe((response) => {
      console.log('okay')
     // alert('the data is updated');
      //this.fetchData();
    })
  }

  deleteProduct = (prodId: number) => {
    //alert(prodId);
    if(confirm('are you sure?')){
        const delUrl = `${this.baseUrl}/${prodId}`;
        return this.http.delete(delUrl).subscribe((response) => {
            this.fetchData();
            alert("Successfully deleted");
        })
    }

  }

}
