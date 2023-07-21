import { Component, OnInit } from "@angular/core";
import { ApiCallerService } from "../services/api-caller.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-dogs-list",
	templateUrl: "./dogs-list.component.html",
	styleUrls: ["./dogs-list.component.css"],
})
export class DogsListComponent implements OnInit {
	breedList: string[] = [];

	constructor(
		private apiCallerService: ApiCallerService,
		private router: Router,
	) {}

	ngOnInit(): void {
		this.fetchAllDogs();
	}

	fetchAllDogs(): void {
		this.apiCallerService.getAllDogs().subscribe({
			next: (data: any) => {
				this.breedList = Object.keys(data.message);
			},
			error: (error) => {
				this.router.navigate(["/error-page"]);
			},
		});
	}
}
