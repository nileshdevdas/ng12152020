import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pip1'
})
export class Pip1Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
