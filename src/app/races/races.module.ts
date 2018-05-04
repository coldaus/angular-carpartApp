import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RacesComponent} from "./races.component";
import {RacesService} from "./races.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [CommonModule,FormsModule],
  declarations: [RacesComponent],
  exports: [RacesComponent],
  providers: [RacesService]
})

export class RacesModule {}
