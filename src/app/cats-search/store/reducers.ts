import { createReducer, on } from '@ngrx/store';
import { CatObjStateInterface } from 'src/app/shared/CatObjState.interface';
import * as ImagesActions from './actions';

export const initialStateImages: CatObjStateInterface = {
  images: [],
	breedsId: [],
	allBreeds: []
};

export const reducerImages = createReducer(
  initialStateImages,
  on(ImagesActions.getImages, (state, action) => ({ ...state, limit: action.limit, breed: action.breed})),
  on(ImagesActions.getImagesSuccess, (state, action) => ({
    ...state,
    images: action.images,
  })),
	on(ImagesActions.getBreedsId, (state) => ({ ...state})),
  on(ImagesActions.getBreedsidSuccess, (state, action) => ({
    ...state,
    breedsId: action.breedsId,
  })),
	on(ImagesActions.getAllBreeds, (state) => ({ ...state})),
  on(ImagesActions.getAllBreedsSuccess, (state, action) => ({
    ...state,
    allBreeds: action.allBreeds,
  })),
	
);
