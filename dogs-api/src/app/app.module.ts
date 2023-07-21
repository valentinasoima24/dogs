import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DogsListComponent } from "./dogs-list/dogs-list.component";
import { DogTypeComponent } from './dog-type/dog-type.component';
import { SubBreedsComponent } from './sub-breeds/sub-breeds.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
	declarations: [AppComponent, DogsListComponent, DogTypeComponent, SubBreedsComponent, ErrorPageComponent],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
