import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DogsListComponent } from "./dogs-list/dogs-list.component";
import { DogTypeComponent } from "./dog-type/dog-type.component";
import { SubBreedsComponent } from "./sub-breeds/sub-breeds.component";
import { ErrorPageComponent } from "./error-page/error-page.component";

const routes: Routes = [
	{ path: "", redirectTo: "app", pathMatch: "full" },
	{ path: "app", component: DogsListComponent },
	{ path: "error-page", component: ErrorPageComponent },
	{ path: "dog-type/:breed", component: DogTypeComponent },
	{ path: "sub-breed/:breed/:subBreed", component: SubBreedsComponent },
	{ path: "**", redirectTo: "error-page" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
