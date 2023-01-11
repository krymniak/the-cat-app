import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs';
import { CatsSearchService } from 'src/app/shared/services/cats-search.service';
import * as ImagesActions from './actions';

@Injectable()
export class ImagesEffects {
  getImages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ImagesActions.getImages),
      mergeMap( action => {
        return this._catsService.getImages(action.limit, action.breed).pipe(
          map((images) => ImagesActions.getImagesSuccess({ images })),
        );
      })
    )
  );

	getBreedsId$ = createEffect(() =>
	this.actions$.pipe(
		ofType(ImagesActions.getBreedsId),
		mergeMap( () => {
			return this._catsService.getBreeds().pipe(
				map((data) =>
					data.map((res) => {
						return {
							id: res.id,
							name: res.name
						}
					})
				),
				map((breedsId) => ImagesActions.getBreedsidSuccess({breedsId})),
			);
		})
	)
);

getAllBreeds$ = createEffect(() =>
this.actions$.pipe(
	ofType(ImagesActions.getAllBreeds),
	mergeMap( () => {
		return this._catsService.getBreeds().pipe(
			map((data) =>
			data.map((res) => {
				return {
					id: res.id,
					name: res.name
				}
			}).map((dataId) => {
			return dataId.id
		})
		),
			map((allBreeds) => ImagesActions.getAllBreedsSuccess({allBreeds})),
		);
	})
)
);

  constructor(private actions$: Actions, private _catsService: CatsSearchService) {}
}