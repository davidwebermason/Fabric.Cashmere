import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    'name': 'nullOrEmpty'
})
export class NullOrEmptyPipe implements PipeTransform {

    public transform(value: string, altText: string): string {
        if (value) {
            value = value.trim();
        }

        return value ? value : altText;
    }
}
