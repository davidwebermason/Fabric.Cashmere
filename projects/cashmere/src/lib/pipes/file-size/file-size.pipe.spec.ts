import {async, inject, TestBed} from '@angular/core/testing';

import { FileSizePipe } from "./file-size.pipe";

describe("FileSizePipe", () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [FileSizePipe]
        }).compileComponents();
    }));

    it("create an instance", inject([FileSizePipe], pipe => {
        expect(pipe).toBeTruthy();
    }));

    it("convert 1 to 1 bytes", inject([FileSizePipe], pipe => {
        const testFileSize: number = 1;
        const result: string = pipe.transform(testFileSize);
        expect(result).toEqual("1 bytes");
    }));

    it("convert '1024' to 1 KB", inject([FileSizePipe], pipe => {
        const testFileSize: number = 1024;
        const result: string = pipe.transform(testFileSize);
        expect(result).toEqual("1 KB");
    }));

    it("convert '1048576' to 1 MB", inject([FileSizePipe], pipe => {
        const testFileSize: number = 1048576;
        const result: string = pipe.transform(testFileSize);
        expect(result).toEqual("1 MB");
    }));

    it("convert '1073741824' to 1 GB", inject([FileSizePipe], pipe => {
        const testFileSize: number = 1073741824;
        const result: string = pipe.transform(testFileSize);
        expect(result).toEqual("1 GB");
    }));

    it("convert '1099511627776' to 1 TB", inject([FileSizePipe], pipe => {
        const testFileSize: number = 1099511627776;
        const result: string = pipe.transform(testFileSize);
        expect(result).toEqual("1 TB");
    }));

    it("convert '1125899906842624' to 1 PB", inject([FileSizePipe], pipe => {
        const testFileSize: number = 1125899906842624;
        const result: string = pipe.transform(testFileSize);
        expect(result).toEqual("1 PB");
    }));

    it("convert '1125854654485' to 1.02 TB", inject([FileSizePipe], pipe => {
        const testFileSize: number = 1125854654485;
        const result: string = pipe.transform(testFileSize);
        expect(result).toEqual("1.02 TB");
    }));
});
