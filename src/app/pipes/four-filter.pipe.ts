import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fourFilter'
})
export class FourFilterPipe implements PipeTransform {

  transform(items: any[], args: any[]): any {
    return items.filter(item => item.id.indexOf(args[0]) !== -1);
  }

}
