import {NgModule} from "@angular/core";
import {MyDatePipe} from "./mydate.pipe";
import {TextDecorationDirective} from "./text-decoration.directive";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [MyDatePipe, TextDecorationDirective],
  exports: [MyDatePipe, TextDecorationDirective]
})

export class SharedModule {}
