import { Component } from '@angular/core';
import { GenresFacade, MovieType, GenreEntity } from '@movie-space/shared';
import { Observable } from 'rxjs';
import { MoviesFacade } from './+state/movies/movies.facade';
import { MovieEntity } from './models';

@Component({
  selector: 'ms-list-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {

  loadedMovies$: Observable<MovieEntity[]>;
  selectedMovieType$: Observable<MovieType>;
  isLoading$: Observable<boolean>;
  allGenres$: Observable<GenreEntity[]>;


  constructor(private readonly _moviesFacade: MoviesFacade,
              genresFacade: GenresFacade) {
    this.loadedMovies$ = _moviesFacade.allMovies$;
    this.selectedMovieType$ = _moviesFacade.selectedMovieType$;
    this.isLoading$ = _moviesFacade.areMoviesLoading$;
    this.allGenres$ = genresFacade.allGenres$;
    _moviesFacade.setMovieType()
    genresFacade.loadGenres();
  }

  setMovieType(movieType: MovieType) {
    this._moviesFacade.setMovieType(movieType);
  }

  onScrolledToBottom() {
    this._moviesFacade.loadNextPage();
  }
}
