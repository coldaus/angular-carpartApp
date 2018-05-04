
import {FormControl, FormGroup, Validators, FormBuilder, NgForm} from '@angular/forms';
import {Component} from "@angular/core";
import {CarPart} from "./car-part";
import {Router} from "@angular/router";

@Component({
    selector: 'car-part-form',
    templateUrl: './car-part-form.component_valid2.html',
    styleUrls: ['./car-part.component.css']
})
export class CarPartFormComponent {

    carPartForm:FormGroup = new FormGroup({
        id: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        price:new FormControl('', Validators.compose([Validators.required,
            Validators.pattern('[0-9]')])),
        quantity:new FormControl('', Validators.required)
    })

    constructor(private router:Router){}

    // Templete 기반 form을 submit 했을 때 호출
    onSubmit(form: NgForm){
        let formData = form.value as CarPart;

        alert(formData.name);

        // 페이지 이동
        this.router.navigate(['/carpart']);

        console.log(form.value);
        console.log('id:' + form.controls['id'].value);
        console.log('name:' + form.controls['name'].value);
        console.log('description:' + form.controls['description'].value);
        console.log('price:' + form.controls['price'].value);
        console.log('quantity:' + form.controls['quantity'].value);
        console.log('Form Valid:' + form.valid);
        console.log('Form Submitted:' + form.submitted);
    }

    // Reactive Form을 submit 했을 때 호출
    onSubmit2() {

      //FormGroup을 사용했을 때 Form의 값 가져오기
      console.log(this.carPartForm.value);
      console.log('>>id:' + this.carPartForm.controls['id'].value);
      console.log('>>name:' + this.carPartForm.controls['name'].value);
    }
}
