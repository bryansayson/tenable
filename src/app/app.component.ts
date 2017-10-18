import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { SearchPipe } from './pipes/search.pipe';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  data : any;
  count: number;
  searchText: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
  	this.getData();
  }

  getAll() {
    this.dataService.getAll().subscribe((response) => {
      this.data = response;
      this.count = this.data.length;
    });
  }

  getData() {
  	this.dataService.getData().subscribe((response) => {
  		this.data = response;
      this.count = this.data.length;
  	});
  }

  deleteHost(host: object) {
    this.dataService.deleteData(host).subscribe((response) => 
      this.getAll()
    )
  }

  addHost(f: NgForm) {
    let newHost = f.value;
    this.dataService.addData(newHost).subscribe((response) => 
      this.getAll()
    )
  }
}
