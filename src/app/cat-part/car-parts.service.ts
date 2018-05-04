import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CarPartsService {

  constructor (private http:HttpClient) {
    console.log(this.http);
  }

  getCarParts():Observable<any> {
    // return this.http.get("assets/json/car-part.json", {responseType:'json'});
    return this.http.get("http://127.0.0.1:52274/products", {responseType:'json'});
  }
}
