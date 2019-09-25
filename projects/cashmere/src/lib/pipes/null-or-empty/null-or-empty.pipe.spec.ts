import {async, inject, TestBed} from '@angular/core/testing';

import { NullOrEmptyPipe } from './null-or-empty.pipe';

describe('NullOrEmptyPipe', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [NullOrEmptyPipe]
        }).compileComponents();
    }));

    it('should create', inject([NullOrEmptyPipe], pipe => {
        expect(pipe).toBeTruthy();
    }));

    it('return source text if not null or empty', inject([NullOrEmptyPipe], pipe => {
        const result: string = pipe.transform('source data', 'alternate text');
        expect(result).toEqual('source data');
    }));

    it('return alternate text contains spaces', inject([NullOrEmptyPipe], pipe => {
        const result: string = pipe.transform('   ', 'alternate text');
        expect(result).toEqual('alternate text');
    }));

    it('return alternate text if empty', inject([NullOrEmptyPipe], pipe => {
        const result: string = pipe.transform('', 'alternate text');
        expect(result).toEqual('alternate text');
    }));

    it('return alternate text if null', inject([NullOrEmptyPipe], pipe => {
        // tslint:disable-next-line: no-null-keyword
        const result: string = pipe.transform(null, 'alternate text');
        expect(result).toEqual('alternate text');
    }));

    it('return alternate text if undefined', inject([NullOrEmptyPipe], pipe => {
        const result: string = pipe.transform(undefined, 'alternate text');
        expect(result).toEqual('alternate text');
    }));
});
