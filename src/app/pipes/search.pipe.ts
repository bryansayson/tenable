import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string) {
  	if (!searchText) {
  		return items;
  	} else {
  		let lower = searchText.toLowerCase();
		return	items.filter(item => 
	        Object.keys(item).some(k => item[k] != null && 
	        item[k].toString().toLowerCase()
	        .includes(lower))
	        );
		}
  	}

}