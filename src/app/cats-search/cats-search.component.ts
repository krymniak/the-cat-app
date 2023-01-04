import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CatsSearchService } from '../shared/cats-search.service';
import { CatObj } from '../shared/interface';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, map, Observable, Subscription, switchMap, tap } from 'rxjs';


@Component({
	selector: 'app-cats-search',
	templateUrl: './cats-search.component.html',
	styleUrls: ['./cats-search.component.scss']
})
export class CatsSearchComponent implements OnInit, OnChanges {

	paramsHuyams$!: Observable<CatObj[]>

	form!: FormGroup
	breedsIdss = new FormControl;
	limit = new FormControl(10)
	private _params$ = new BehaviorSubject<null>(null)
	private _subscription = new Subscription()

	images!: CatObj[]
	breedsIds!: any[]


	get paramsArray(): FormArray {
		return this.form.get('params') as FormArray
	}

	constructor(
		private catsService: CatsSearchService,
		private formBuilder: FormBuilder
	) {
		this.form = formBuilder.group({
			params: this.formBuilder.array([])
		})
	}

	ngOnChanges(changes: SimpleChanges): void {
		console.log(changes)
	}

	ngOnInit(): void {


		this.paramsHuyams$ = this.catsService.getImages(20, '')
			.pipe(
				tap((params: any) => {
					this.paramsArray.clear()
					params.map((paramData: any) => paramData.map((param: any) => {
						this.paramsArray.push(
							this.formBuilder.group({
								...param,
								breeds: [
									{ value: param.id }
								]
							})
						)
					}))
				})
			)
		setTimeout(() => {
			console.log(this.breedsIdss.value)
			console.log(this.limit.value)
		}, 5000)

	}


	searchCats() {
		this.catsService.getImages(this.limit.value!, this.breedsIdss.value).subscribe(
			data => {
				this.images = data
				console.log(this.images)
			}
		)
	}

	getBreeds() {
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
			).subscribe(breedsId => {
				this.breedsIds = breedsId
				this.breedsIds.unshift({ breedsId: '', name: 'All breeds' })
				console.log(breedsId)
			})
	}


}
