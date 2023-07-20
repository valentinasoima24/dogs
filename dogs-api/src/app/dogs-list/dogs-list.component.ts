import { Component, OnInit } from "@angular/core";
import { ApiCallerService } from "../services/api-caller.service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
	selector: "app-dogs-list",
	templateUrl: "./dogs-list.component.html",
	styleUrls: ["./dogs-list.component.css"],
})
export class DogsListComponent implements OnInit {
	breedsArray: string[] = [];

	constructor(
		private apiCallerService: ApiCallerService,
		private router: Router,
		private http: HttpClient,
	) {}

	ngOnInit(): void {
		this.fetchAllDogs();
	}

	fetchAllDogs(): void {
		this.apiCallerService.getAllDogs().subscribe({
			next: (data: any) => {
				this.breedsArray = Object.keys(data.message);
			},
			error: (error) => {
				this.router.navigate(["/error-page"]);
			},
		});
	}
}
