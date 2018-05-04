import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CarPartComponent} from "./car-part.component";
import {CarPartsService} from "./car-parts.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CarPartFormComponent} from "./car-part-form.component";

@NgModule({
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  declarations: [CarPartComponent,CarPartFormComponent],
  exports: [CarPartComponent,CarPartFormComponent],
  providers: [CarPartsService]
})

export class CarPartModule {}
