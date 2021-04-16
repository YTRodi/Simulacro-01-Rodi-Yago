import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../classes/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  @Input() peliculaParaMostrar: Movie;

  constructor() {
    // this.peliculaParaMostrar = new Movie();
    // this.peliculaParaMostrar = new Movie();
    // this.peliculaParaMostrar.nombre = 'Nombre de película';
    // this.peliculaParaMostrar.tipo = 'Tipo de película';
    // this.peliculaParaMostrar.fechaEstreno = new Date();
  }

  ngOnInit(): void {}
}
