import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieListComponent } from './serie-list/serie-list.component';
import { SerieService } from './serie.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SerieListComponent],
  exports: [SerieListComponent],
  providers: [SerieService]
})
export class SerieModule { }
