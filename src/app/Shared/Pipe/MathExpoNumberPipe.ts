import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'expoNumber'
})

export class ExpoNumberPipe implements PipeTransform {
  transform(value: number, exp?: number) {
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}
