
import {CarPart} from "./car-part";
import {CarPartsService} from "./car-parts.service";
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-cat-part',
  templateUrl: './car-part.component.html',
  styleUrls: ['./car-part.component.css']
})
export class CarPartComponent implements OnInit {
  carParts : CarPart[];
  constructor(private carPartService:CarPartsService) {
    console.log("CatPartComponent constructor called");
  }

  ngOnInit() {
    console.log("CatPartComponent ngOnInit() called");
    // this.carParts = this.carPartService.getCarParts();
    this.carPartService.getCarParts().subscribe(response => this.carParts = response['data']);
  }

  ngOnDestroy() {
    console.log("CatPartComponent ngOnDestroy() called");
  }

  totalCarParts() {
    // let sum = 0;
    // for (let carPart of this.carParts) {
    //   sum += carPart.inStock;
    // }
    // return sum;

    // 두번째 인자는 값 초기화
    if (Array.isArray(this.carParts)) {
      return this.carParts.reduce((previousValue, currentValue) => previousValue + currentValue.inStock, 0);
    }

  }

  upQuantity(carPart) {
    console.log(carPart);
    if (carPart.quantity < carPart.inStock) carPart.quantity++;
  }

  downQuantity(carPart) {
    console.log(carPart);
    if (carPart.quantity != 0) carPart.quantity--;
  }
  title = 'Ultra Racing';
}
