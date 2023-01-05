import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

	constructor(
		private _auth: AuthService,
		private _router: Router
	) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
		if (this._auth.isAuthenticated()) {
			return true
		} else {
			this._auth.logout()
			return this._router.navigate(['/login'], {
				queryParams: {
					loginAgain: true
				}
			})
		}
	}

}