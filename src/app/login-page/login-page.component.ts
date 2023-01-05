import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../shared/interface';
import { AuthService } from '../shared/services/auth.service';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

	loginForm!: FormGroup

	hide: boolean = true
	submitted: boolean = false
	message!: string

	constructor(

		public auth: AuthService,
		private router: Router,
		private route: ActivatedRoute
	) { }

	ngOnInit(): void {

		this.route.queryParams.subscribe((params: Params) => {
			if (params['loginAgain']) {
				this.message = 'Please, login again!'
			} else if (params['authFailed']) {
				this.message = 'Your session has expired. Please, login again!'
			}
		})

		this.loginForm = new FormGroup({
			email: new FormControl('thecatapp@gmail.com', [
				Validators.required,
				Validators.email
			]),
			password: new FormControl('123456', [
				Validators.required,
				Validators.minLength(6)
			])
		})


	}

	submit() {
		if (this.loginForm.invalid) {
			return
		}

		this.submitted = true

		const user: User = {
			email: this.loginForm.value.email,
			password: this.loginForm.value.password
		}

		this.auth.login(user).subscribe(() => {
			this.loginForm.reset()
			this.router.navigate(['/home'])
			this.submitted = false
		}, () => {
			this.submitted = false
		})
	}

}