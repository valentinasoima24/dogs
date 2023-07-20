import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
	selector: "app-sub-breeds",
	templateUrl: "./sub-breeds.component.html",
	styleUrls: ["./sub-breeds.component.css"],
})
export class SubBreedsComponent implements OnInit {
	breed!: string;
	subBreed!: string;
	subBreedResult!: string;

	constructor(
		private http: HttpClient,
		private router: Router,
		private route: ActivatedRoute,
	) {}

	ngOnInit(): void {
		this.route.params.subscribe((params) => {
			this.breed = params["breed"];
			this.subBreed = params["subBreed"];
			if (this.subBreed) {
				this.getSubBreed();
			}
		});
	}

	getSubBreed(): void {
		const apiUrl = `https://dog.ceo/api/breed/${this.breed}/${this.subBreed}/images/random`;
		this.http.get(apiUrl).subscribe({
			next: (response: any) => {
				this.subBreedResult = response.message;
			},
			error: (error: any) => {
				this.router.navigate(["/error-page"]);
			},
		});
	}
}
