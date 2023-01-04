import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CatsSearchService } from '../shared/cats-search.service';
import { CatObj } from '../shared/interface';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, map, Observable, Subscription, switchMap, tap } from 'rxjs';


@Component({
	selector: 'app-cats-search',
	templateUrl: './cats-search.component.html',
	styleUrls: ['./cats-search.component.scss']
})
export class CatsSearchComponent implements OnInit {

	breeds$!: Observable<CatObj[]>
	form!: FormGroup
	// breedsControl = new FormControl
	// limit = new FormControl(10)

	images!: CatObj[]
	breedsIds!: any[]
	allBreeds!: string[]

	limitValues = [
		1,
		5,
		10,
		20
	]
	



	private _params$ = new BehaviorSubject<null>(null)
	private _subscription = new Subscription()

	get paramsArray(): FormArray {
		return this.form.get('params') as FormArray
	}



	constructor(
		private catsService: CatsSearchService,
		private formBuilder: FormBuilder
	) {

	}

	ngOnInit(): void {
		this.form = new FormGroup({
			limit: new FormControl(10, Validators.required),
			breedsControl: new FormControl(['abys'], Validators.required)
		})
		this.catsService.getBreeds()
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
			.subscribe(breedsId => {
				this.breedsIds = breedsId
				this.allBreeds = breedsId.map((data: any) => {
					return data.breedsId
				})
			})


	}


	searchCats() {
		this.catsService.getImages(this.form.value.limit, this.form.value.breedsControl).subscribe(
			data => {
				this.images = data
			}
		)
	}



}
