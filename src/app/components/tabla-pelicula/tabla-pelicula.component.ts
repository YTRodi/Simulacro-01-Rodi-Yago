import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../../classes/movie';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css'],
})
export class TablaPeliculaComponent implements OnInit {
  @Input() listadoDeLaTabla: Movie[];
  @Output() eventPeliculaSeleccionada: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  seSeleccionoUnaPelicula(pelicula: Movie) {
    // console.info('Pelicula', pelicula);
    this.eventPeliculaSeleccionada.emit(pelicula);
  }
}
