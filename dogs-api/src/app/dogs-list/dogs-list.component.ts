import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-dogs-list",
	templateUrl: "./dogs-list.component.html",
	styleUrls: ["./dogs-list.component.css"],
})
export class DogsListComponent implements OnInit {
	breedsArray: string[] = [];
	url: string = "https://dog.ceo/api/breeds/list/all";

	constructor() { }

	ngOnInit(): void {
		fetch(this.url)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				this.breedsArray = Object.keys(data.message);
			})
			.catch((error) => {
				console.error(error);
			});
	}
}

