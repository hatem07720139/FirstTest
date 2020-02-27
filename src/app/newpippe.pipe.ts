import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newpippe'
})
export class NewpippePipe implements PipeTransform {

  transform(value: any, search: string): any {
if (search===''||search=== null) {
  return value;
} 
return value.filter(contactUser =>contactUser.name.includes(search));
 }

}
