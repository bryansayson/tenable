import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getData() {
  	return this.http.get('http://localhost:8080/download/request?host=2').map(res => res.json());
  }

  getAll() {
  	return this.http.get('http://localhost:8080/download/all').map(res => res.json());
  }

  deleteData(host: any) {
  	let name = host.name;
  	return this.http.delete('http://localhost:8080/delete/' + name).map(res => res.json());
  }

  addData(host: object) {
  	return this.http.post('http://localhost:8080/add/', host).map(res => res.json());
  }
};
