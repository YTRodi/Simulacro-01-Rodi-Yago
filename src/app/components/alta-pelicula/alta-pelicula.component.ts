import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Movie } from '../../classes/movie';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css'],
})
export class AltaPeliculaComponent implements OnInit {
  peliculaNueva: Movie;
  @Output()
  eventCreacionNuevaPelicula: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  guardarNuevaPelicula() {
    this.eventCreacionNuevaPelicula.emit(this.peliculaNueva);
    this.peliculaNueva = null;
  }

  hacerNuevaPelicula() {
    this.peliculaNueva = new Movie();
  }
}
