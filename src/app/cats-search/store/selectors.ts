import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/appState.interface';

export const selectFeature = (state: AppStateInterface) => state.images;


export const imagesSelector = createSelector(
  selectFeature,
  (state) => state.images
);

export const breedsIdSelector = createSelector(
  selectFeature,
  (state) => state.breedsId
);


export const allBreedsSelector = createSelector(
  selectFeature,
  (state) => state.allBreeds
);

