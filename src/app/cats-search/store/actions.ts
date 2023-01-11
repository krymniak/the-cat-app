import { createAction, props } from '@ngrx/store';
import { Breeds, CatObj } from 'src/app/shared/interface';

export const getImages = createAction('[Images] Get Images',
props<{limit: number, breed: string}>());
export const getImagesSuccess = createAction(
  '[Images] Get Images success',
  props<{ images: CatObj[] }>()
);

export const getBreedsId = createAction('[BreedsId] Get BreedsId');
export const getBreedsidSuccess = createAction(
  '[BreedsId] Get BreedsId success',
  props<{ breedsId: Breeds[] }>()
);

export const getAllBreeds = createAction('[AllBreeds] Get AllBreeds');
export const getAllBreedsSuccess = createAction(
  '[AllBreeds] Get AllBreeds success',
  props<{ allBreeds: string[] }>()
);
