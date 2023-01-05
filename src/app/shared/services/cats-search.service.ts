import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable, map } from "rxjs";
import { Breeds, CatObj } from "src/app/shared/interface";

@Injectable()

export class CatsSearchService {

	constructor(private _http: HttpClient) { }

	getImages(limit: number, breedIds: string): Observable<CatObj[]> {
		return this._http.get<CatObj[]>(`${environment.url}?limit=${limit}&api_key=${environment.apiKey}&breed_ids=${breedIds}`)
	}


	getBreeds(): Observable<Breeds[]> {
		return this._http.get<Breeds[]>('https://api.thecatapi.com/v1/breeds')
	}
}


