import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { Serie } from '../serie';


@Component({
  selector: 'list-serie',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  constructor(private serieService: SerieService) { }


    series: Serie[] = [];

    getSeries(): void {
      this.serieService.getSeries().subscribe(series => this.series = series);
    }

    seasonsAvg(): number{
      let suma = 0;
      for ( const serie of this.series){
        suma += serie.seasons;
      }
      suma = suma/this.series.length
      return suma;
  }

    ngOnInit() {
        this.getSeries();
    }

}
