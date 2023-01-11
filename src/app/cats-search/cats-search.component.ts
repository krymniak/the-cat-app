import { Component, OnInit } from '@angular/core';
import { CatsSearchService } from '../shared/services/cats-search.service';
import { Breeds, CatObj } from '../shared/interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from '../shared/appState.interface';
import * as ImagesActions from '../cats-search/store/actions';
import { allBreedsSelector, breedsIdSelector, imagesSelector } from './store/selectors';


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
		private _store: Store<AppStateInterface>
	) {

	}

	ngOnInit(): void {
		
		this.form = new FormGroup({
			limit: new FormControl(10, Validators.required),
			breedsControl: new FormControl(['abys'], Validators.required)
		})

		this._store.dispatch(ImagesActions.getBreedsId())
		this.breedsIds$ = this._store.pipe(select(breedsIdSelector))

		this._store.dispatch(ImagesActions.getAllBreeds())

			this.allBreeds$ = this._store.pipe(select(allBreedsSelector))

	}


	searchCats() {
		this._store.dispatch(ImagesActions.getImages({limit: this.form.value.limit, breed: this.form.value.breedsControl}))
		this.images$ = this._store.pipe(select(imagesSelector))
		
	}



}
