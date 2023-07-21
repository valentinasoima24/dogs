import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ApiCallerService } from "../services/api-caller.service";

@Component({
	selector: "app-dog-type",
	templateUrl: "./dog-type.component.html",
	styleUrls: ["./dog-type.component.css"],
})
export class DogTypeComponent implements OnInit {
	dogImageUrl!: string;
	breed!: string;
	subBreed!: string | null;
	subBreedsList!: string[];

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private apiCallerService: ApiCallerService,
	) { }

	ngOnInit(): void {
		this.activatedRoute.params.subscribe((params) => {
			this.breed = params["breed"];
		});
		this.prepareImage();
		this.prepareBreed();
	}

	prepareImage(): void {
		if (this.breed) {
			this.apiCallerService.getRandomImage(this.breed).subscribe({
				next: (response: any) => {
					this.dogImageUrl = response.message;
				},
				error: (error) => {
					this.router.navigate(["/error-page"]);
				},
			});
		}
	}

	prepareBreed(): void {
		this.apiCallerService.getSubBreed(this.breed).subscribe({
			next: (response: any) => {
				this.subBreedsList = response.message;
			},
			error: (error) => {
				this.router.navigate(["/error-page"]);
			},
		});
	}
}
