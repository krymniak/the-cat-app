import { Component, OnInit } from '@angular/core';
import { CatsSearchService } from '../shared/services/cats-search.service';
import { Breeds, CatObj } from '../shared/interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';


@Component({
	selector: 'app-cats-search',
	templateUrl: './cats-search.component.html',
	styleUrls: ['./cats-search.component.scss']
})
export class CatsSearchComponent implements OnInit {

	breedsIds$!: Observable<Breeds[]>
	images$!: Observable<CatObj[]>
	allBreeds$!: Observable<string[]>
	form!: FormGroup

	limitValues = [
		1,
		5,
		10,
		20
	]

	constructor(
		private _catsService: CatsSearchService,
	) {

	}

	ngOnInit(): void {
		this.form = new FormGroup({
			limit: new FormControl(10, Validators.required),
			breedsControl: new FormControl(['abys'], Validators.required)
		})
		this.breedsIds$ = this._catsService.getBreeds()
			.pipe(
				map((data) =>
					data.map((res) => {
						return {
							id: res.id,
							name: res.name
						}
					})
				)
			)


			this.allBreeds$ = this._catsService.getBreeds()
			.pipe(
				map((data) =>
					data.map((res) => {
						return {
							id: res.id,
							name: res.name
						}
					}).map((dataId) => {
					return dataId.id
				})
				)
			)

	}


	searchCats() {
		this.images$ = this._catsService.getImages(this.form.value.limit, this.form.value.breedsControl)
		
	}



}
