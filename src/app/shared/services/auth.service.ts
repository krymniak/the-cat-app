import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, Subject, tap, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { FbAuthResponse, User } from "../interface";

@Injectable({ providedIn: 'root' })
export class AuthService {

	public error$: Subject<string> = new Subject<string>()

	constructor(private _http: HttpClient) { }

	get token(): string {
		const expDate = new Date(localStorage.getItem('fb-token-exp')!)
		if (new Date() > expDate) {
			this.logout()
			return null!
		}
		return localStorage.getItem('fb-token')!
	}

	login(user: User): Observable<FbAuthResponse | null> {
		user.returnSecureToken = true
		return this._http.post<FbAuthResponse | null>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKeyFb}`, user)
			.pipe(
				tap(this.setToken),
				catchError(this.handleError.bind(this))
			)
	}

	logout() {
		this.setToken(null!)
	}

	isAuthenticated(): boolean {
		return !!this.token
	}

	private handleError(error: HttpErrorResponse) {
		const { message } = error.error.error

		switch (message) {
			case 'EMAIL_NOT_FOUND':
				this.error$.next('Email not found!')
				break
			case 'INVALID_EMAIL':
				this.error$.next('Invalid email!')
				break
			case 'INVALID_PASSWORD':
				this.error$.next('Invalid password!')
				break
		}

		return throwError(error)
	}

	private setToken(response: FbAuthResponse | null) {
		if (response) {
			const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
			localStorage.setItem('fb-token', response.idToken)
			localStorage.setItem('fb-token-exp', expDate.toString())
		} else {
			localStorage.clear()
		}

	}

}