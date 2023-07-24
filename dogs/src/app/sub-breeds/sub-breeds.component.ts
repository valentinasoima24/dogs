import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiCallerService } from "../services/api-caller.service";
import { ButtonModule } from "primeng/button";

@Component({
	selector: "app-sub-breeds",
	templateUrl: "./sub-breeds.component.html",
	styleUrls: ["./sub-breeds.component.css"],
})
export class SubBreedsComponent implements OnInit {
	breed!: string;
	subBreed!: string;
	subBreedImage!: string;

	constructor(
		private apiCallerService: ApiCallerService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
	) {}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe((params) => {
			this.breed = params["breed"];
			this.subBreed = params["subBreed"];
			if (this.subBreed) {
				this.getSubBreed();
			}
		});
	}

	getSubBreed(): void {
		this.apiCallerService.getSubBreedImage(this.breed, this.subBreed).subscribe({
			next: (response: any) => {
				this.subBreedImage = response.message;
			},
			error: (error: any) => {
				this.router.navigate(["/error-page"]);
			},
		});
	}
}
