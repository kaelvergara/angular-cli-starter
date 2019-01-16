import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sharedPipe'
})
export class SharedPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return 'hello world';
  }
}
