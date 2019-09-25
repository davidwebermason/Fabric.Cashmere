import { Pipe, PipeTransform } from "@angular/core";

// Convert bytes into largest possible unit.
// Credit to https://gist.github.com/JonCatmull/ecdf9441aaa37336d9ae2c7f9cb7289a
@Pipe({ "name": "fileSize" })
export class FileSizePipe implements PipeTransform {

    private units: string[] = [
        "bytes",
        "KB",
        "MB",
        "GB",
        "TB",
        "PB"
    ];

    public transform(bytes: number = 0, precision: number = 2): string {
        if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes)) {
            return "?";
        }

        let unit: number = 0;

        while (bytes >= 1024) {
            bytes /= 1024;
            unit++;
        }

        if (bytes % 1 === 0) {
            return bytes.toFixed(0) + " " + this.units[unit];
        } else {
            return bytes.toFixed(+ precision) + " " + this.units[unit];
        }
    }
}
