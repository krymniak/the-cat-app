import { Component, Input, OnInit } from '@angular/core';


@Component({
	selector: 'app-cat-card',
	templateUrl: './cat-card.component.html',
	styleUrls: ['./cat-card.component.scss']
})
export class CatCardComponent implements OnInit {
	
	@Input() image!: any
	ngOnInit(): void {
		
	}
}