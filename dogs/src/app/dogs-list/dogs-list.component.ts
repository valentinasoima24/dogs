import { Component, OnInit } from "@angular/core";
import { ApiCallerService } from "../services/api-caller.service";
import { Router } from "@angular/router";
import { TreeNode } from "primeng/api";

@Component({
	selector: "app-dogs-list",
	templateUrl: "./dogs-list.component.html",
	styleUrls: ["./dogs-list.component.css"],
})
export class DogsListComponent implements OnInit {
	breedList: TreeNode[] = [];
	selectedBreed: any;

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
				this.breedList = Object.keys(data.message).map((breed) => ({
					label: breed,
					children: data.message[breed].map((subBreed: string) => ({
						label: subBreed,
					})),
				}));
			},
			error: (error) => {
				this.router.navigate(["/error-page"]);
			},
		});
	}

	onNodeSelect(event: any) {
		if (event.node.parent && event.node.parent.children) {
			const parentBreedLabel = event.node.parent.label;
			this.router.navigate(["/sub-breed", parentBreedLabel, event.node.label]);
		} else {
			this.router.navigate(["/dog-type", event.node.label]);
		}
	}
}
