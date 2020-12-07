import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dada'
})
export class DadaPipe implements PipeTransform{
  transform(name: string): string {
    return name + ' dadancha vijay aso!!';
  }
}
