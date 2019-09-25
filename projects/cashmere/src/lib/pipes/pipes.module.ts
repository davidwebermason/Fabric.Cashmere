import {NgModule} from '@angular/core';

import {EllipsisPipe} from './ellipsis.pipe';
import { NullOrEmptyPipe } from './null-or-empty/null-or-empty.pipe';

@NgModule({
    declarations: [EllipsisPipe, NullOrEmptyPipe],
    exports: [EllipsisPipe, NullOrEmptyPipe]
})
export class PipesModule {}
