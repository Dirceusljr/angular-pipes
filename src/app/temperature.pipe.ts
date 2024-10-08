import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(
    value: string | number,
    input: 'cel' | 'fah',
    output?: 'cel' | 'fah'
  ) {
    let val: number;

    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    let outputTemp: number;
    let symbol: '°C' | '°F';

    if (input === 'cel' && output === 'fah') {
      outputTemp = val * (9 / 5) + 32;
    } else if (input === 'fah' && output === 'cel') {
      outputTemp = (val - 32) * (5 / 9);
    } else {
      outputTemp = val;
    }

    if (!output) {
      symbol = input === 'cel' ? '°C':'°F';
    } else {
      symbol = output === 'cel' ? '°C':'°F';
    }

    return `${outputTemp.toFixed(2)} ${symbol}`;
  }
}
