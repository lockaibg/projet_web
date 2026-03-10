import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tesgt',
  standalone: false,
})
export class TesgtPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
