import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  data : any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
  	this.getData();
  }

  getData() {
	this.dataService.getData().subscribe((res) => {
		this.data = res;
		console.log(res);
	});
  }
}
