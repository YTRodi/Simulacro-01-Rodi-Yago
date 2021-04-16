import { Component, OnInit } from '@angular/core';
import { Movie } from '../../classes/movie';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css'],
})
export class SearchMovieComponent implements OnInit {
  listadoPeliculas: Movie[];
  peliculaSeleccionada: Movie;

  constructor() {
    this.listadoPeliculas = [
      {
        id: 1,
        nombre: 'IT',
        tipo: 'Terror',
        fechaEstreno: new Date(),
        cantidadPublico: 21,
        foto: 'https://i.blogs.es/d2a8c9/it-dos-taquilla/840_560.jpeg',
      },
      {
        id: 2,
        nombre: 'Shrek',
        tipo: 'Comedia',
        fechaEstreno: new Date(),
        cantidadPublico: 31,
        foto:
          'https://assets.tonica.la/__export/1615664599774/sites/debate/img/2021/03/13/shrek-reestreno-dreamworks.jpg_759710130.jpg',
      },
      {
        id: 3,
        nombre: 'Como si fuera la primera vez',
        tipo: 'Amor',
        fechaEstreno: new Date(),
        cantidadPublico: 40,
        foto: 'https://i.ytimg.com/vi/qu20bckIBF8/maxresdefault.jpg',
      },
    ];
  }

  ngOnInit(): void {}

  cargarPeliculaSeleccionada(pelicula: Movie) {
    this.peliculaSeleccionada = pelicula;

    console.log(this.peliculaSeleccionada);
  }

  cargarNuevaPelicula(pelicula: Movie) {
    this.listadoPeliculas.push(pelicula);
  }
}
