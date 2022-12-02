import { NgModule } from '@angular/core';
import { DetailComponent } from './detail.component';
import { AsyncPipe, NgIf } from '@angular/common';

@NgModule({
  imports: [AsyncPipe, NgIf],
  declarations: [DetailComponent],
  providers: [],
  exports: [DetailComponent],
})
export class DetailComponentModule {}
