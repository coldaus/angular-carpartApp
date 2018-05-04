import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'mydate'})
export class MyDatePipe implements PipeTransform {
    transform(value: string, exponent: string): string {
        console.log("날짜 " + value);

        //20170329
        if(value.length == 8){
            return value.substring(0,4) + exponent + 
                value.substring(4,6) +  exponent + 
                value.substring(6,8);
        }
        //2017329
        if(value.length == 7){
            return value.substring(0,4) + exponent +
                '0'+value.substring(4,5) +  exponent +
                value.substring(5,7);
        }
        else {
            return value;
        }
    }
}
