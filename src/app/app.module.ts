import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SearchMovieComponent } from './pages/search-movie/search-movie.component';
import { MenuComponent } from './pages/menu/menu.component';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { AltaPeliculaComponent } from './components/alta-pelicula/alta-pelicula.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SearchMovieComponent,
    MenuComponent,
    TablaPeliculaComponent,
    MovieDetailComponent,
    AltaPeliculaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
