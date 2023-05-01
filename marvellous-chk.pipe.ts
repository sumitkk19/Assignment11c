import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, chk: string): string {
    switch (chk) {
      case "Prime":
        if (value <= 1) {
          return `${value} is not a Prime number`;
        }
        else if (value === 2) {
          return `${value} is a Prime number`;
        }
        else {
          for (let i = 2; i < value; i++) {
            if (value % i === 0) {
              return `${value} is not a Prime number`;
            }
          }
          return `${value} is a Prime number`;
        }
      case "Perfect":
        let sum = 0;
        for (let i = 1; i < value; i++) {
          if (value % i === 0) {
            sum += i;
          }
        }
        if (sum === value) {
          return `${value} is a Perfect number`;
        }
        else {
          return `${value} is not a Perfect number`;
        }
      case "Even":
        if (value % 2 === 0) {
          return `${value} is an Even number`;
        }
        else {
          return `${value} is not an Even number`;
        }
      case "Odd":
        if (value % 2 === 1) {
          return `${value} is an Odd number`;
        }
        else {
          return `${value} is not an Odd number`;
        }
      default:
        return "Invalid Check Parameter";
    }
  }

}
