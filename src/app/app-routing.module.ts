import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./about.component";
import {CarPartComponent} from "./cat-part/car-part.component";
import {RacesComponent} from "./races/races.component";
import {CarPartFormComponent} from "./cat-part/car-part-form.component";

export const MYROUTERS:Routes = [
  {path: '', component: AboutComponent},
  {path: 'carpart', component: CarPartComponent},
  {path: 'races', component: RacesComponent},
  {path: 'carpartform', component: CarPartFormComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(MYROUTERS)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

