import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'minutesToHours'})
export class MinutesToHoursMockPipe implements PipeTransform {
    transform(value: number): string {
        return '';
    }
}
