import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DogsListComponent } from "./dogs-list/dogs-list.component";
import { DogTypeComponent } from "./dog-type/dog-type.component";

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'app', component: DogsListComponent },
  { path: 'dog-type/:breed', component: DogTypeComponent },
  { path: '**', redirectTo: 'app' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
