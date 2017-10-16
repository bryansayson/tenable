import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getData() {
  	return this.http.get('http://localhost:8080/download/request?host=2').map((res) => {
  		res.json();
  	});
  }
}
