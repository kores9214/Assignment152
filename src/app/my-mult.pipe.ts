import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  transform(value: number, ...args): number
  {
    //var num=parseInt(Param);
    let no1=value;
    let no2=args[0];
    let multi=no1*no2;
    console.log("Addition: " + multi);
    return multi;
  }

}
