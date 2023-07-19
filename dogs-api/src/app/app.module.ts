import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DogsListComponent } from "./dogs-list/dogs-list.component";
import { DogTypeComponent } from './dog-type/dog-type.component';



@NgModule({
	declarations: [AppComponent, DogsListComponent, DogTypeComponent],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
