import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(value: number, ...args): number
  {
    //var num=parseInt(Param);
    let no1=value;
    let no2=args[0];
    let add=no1+no2;
    console.log("Addition: " + add);
    return add;
  }
}
