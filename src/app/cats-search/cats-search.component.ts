import { Component } from '@angular/core';
import { CatsSearchService } from '../shared/cats-search.service';
import { CatObj } from '../shared/interface';


@Component({
	selector: 'app-cats-search',
	templateUrl: './cats-search.component.html',
	styleUrls: ['./cats-search.component.scss']
})
export class CatsSearchComponent {

	images!: CatObj[]
	ad: any
	constructor(private catsService: CatsSearchService) {

	}

	searchCats() {
		this.catsService.getImages(20, '').subscribe(
			data => {
				this.images = data
				console.log(this.images)
				this.ad = Object.keys(data)
				console.log(this.ad)
			}
		)
	}

	
}
