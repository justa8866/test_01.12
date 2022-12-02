import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { ListComponent } from './list.component';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [MatListModule, CommonModule, MatTableModule, RouterLink],
  declarations: [ListComponent],
  providers: [],
  exports: [ListComponent],
})
export class ListComponentModule {}
