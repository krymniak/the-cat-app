import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable, map } from "rxjs";
import { CatObj } from "./interface";

@Injectable()

export class CatsSearchService {

	constructor(private http: HttpClient) { }

	getImages(limit: number =10, breedIds: string): Observable<CatObj[]> {
		return this.http.get(`${environment.url}?limit=${limit}&api_key=${environment.apiKey}&breed_ids=${breedIds}`)
			.pipe(
				map((response: { [key: string]: any }) => {
					return Object
						.keys(response)
						.map(key => ({
							...response[key],
						}))
				})
			)
	}


	getBreeds(): Observable<object> {
		return this.http.get('https://api.thecatapi.com/v1/breeds')
	}
}


