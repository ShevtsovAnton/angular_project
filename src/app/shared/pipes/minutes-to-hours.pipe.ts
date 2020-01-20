import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHours'
})
export class MinutesToHoursPipe implements PipeTransform {

  transform(duration: number): string {
    if (!duration || isNaN(duration)) {
      return '';
    }
    const hours = Math.floor(duration / 60);
    const minutes = duration - hours * 60;
    const result = hours ? `${hours} h ${minutes} min` : `${minutes} min`;
    return result;
  }
}
