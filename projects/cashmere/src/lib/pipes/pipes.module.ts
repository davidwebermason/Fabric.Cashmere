import {NgModule} from '@angular/core';

import {EllipsisPipe} from './ellipsis.pipe';
import { FileSizePipe } from './file-size/file-size.pipe';

@NgModule({
    declarations: [EllipsisPipe, FileSizePipe],
    exports: [EllipsisPipe, FileSizePipe]
})
export class PipesModule {}
