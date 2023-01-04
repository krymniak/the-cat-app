import { Component, OnInit } from '@angular/core';
import { CatsSearchService } from '../shared/cats-search.service';
import { CatObj } from '../shared/interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, map, Observable, Subscription } from 'rxjs';


@Component({
	selector: 'app-cats-search',
	templateUrl: './cats-search.component.html',
	styleUrls: ['./cats-search.component.scss']
})
export class CatsSearchComponent implements OnInit {

	breedsIds$!: Observable<any[]>
	images$!: Observable<CatObj[]>
	allBreeds$!: Observable<string[]>
	form!: FormGroup

	// images!: CatObj[]
	// breedsIds!: any[]
	// allBreeds!: string[]

	limitValues = [
		1,
		5,
		10,
		20
	]

	constructor(
		private catsService: CatsSearchService,
	) {

	}

	ngOnInit(): void {
		this.form = new FormGroup({
			limit: new FormControl(10, Validators.required),
			breedsControl: new FormControl(['abys'], Validators.required)
		})
		this.breedsIds$ = this.catsService.getBreeds()
			.pipe(
				map((data: any) =>
					data.map((res: any) => {
						return {
							breedsId: res.id,
							name: res.name
						}
					})
				)
			)


			this.allBreeds$ = this.catsService.getBreeds()
			.pipe(
				map((data: any) =>
					data.map((res: any) => {
						return {
							breedsId: res.id,
							name: res.name
						}
					}).map((dataId: any) => {
					return dataId.breedsId
				})
				)
			)

	}


	searchCats() {
		this.images$ = this.catsService.getImages(this.form.value.limit, this.form.value.breedsControl)
		
	}



}
