import { FileSizePipe } from './file-size.pipe';

fdescribe('FileSizePipe', () => {
    const pipe: FileSizePipe = new FileSizePipe();

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('convert 1 to 1 bytes', () => {
        const testFileSize: number = 1;
        const result: string = pipe.transform(testFileSize);
        expect(result).toEqual('1 bytes');
    });

    it('convert "1024" to 1 KB', () => {
        const testFileSize: number = 1024;
        const result: string = pipe.transform(testFileSize);
        expect(result).toEqual('1 KB');
    });

    it('convert "1048576" to 1 MB', () => {
        const testFileSize: number = 1048576;
        const result: string = pipe.transform(testFileSize);
        expect(result).toEqual('1 MB');
    });

    it('convert "1073741824" to 1 GB', () => {
        const testFileSize: number = 1073741824;
        const result: string = pipe.transform(testFileSize);
        expect(result).toEqual('1 GB');
    });

    it('convert "1099511627776" to 1 TB', () => {
        const testFileSize: number = 1099511627776;
        const result: string = pipe.transform(testFileSize);
        expect(result).toEqual('1 TB');
    });

    it('convert "1125899906842624" to 1 PB', () => {
        const testFileSize: number = 1125899906842624;
        const result: string = pipe.transform(testFileSize);
        expect(result).toEqual('1 PB');
    });

    it('convert "260024669455461000000" to 230948.30 PB', () => {
        const testFileSize: number = 260024669455461000000;
        const result: string = pipe.transform(testFileSize);
        expect(result).toEqual('230948.30 PB');
    });

    it('convert "1125854654485" to 1.02 TB', () => {
        const testFileSize: number = 1125854654485;
        const result: string = pipe.transform(testFileSize);
        expect(result).toEqual('1.02 TB');
    });

    it('should reduce precision to 100 if given precision is over 100', () => {
        const testFileSize: number = 2000;
        const result: string = pipe.transform(testFileSize, 123);
        expect(result).toEqual('1.9531250000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 KB');
    });
});
