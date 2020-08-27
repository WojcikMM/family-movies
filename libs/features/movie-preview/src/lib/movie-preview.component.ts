import { Component } from '@angular/core';
import {
  GLOBAL_CONST,
  MovieDetailsDto
} from '@movie-space/shared';
import { ActivatedRoute } from '@angular/router';
import { MOVIE_PREVIEW_CONST } from './movie-preview.const';

@Component({
  selector: 'ms-preview-movie-details',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.scss']
})
export class MoviePreviewComponent {
  movieDetails: MovieDetailsDto;
  posterPrefix: string = GLOBAL_CONST.MOVIE_DB.POSTER_URL_PREFIX;

  constructor(route: ActivatedRoute) {
    this.movieDetails = route.snapshot.data[MOVIE_PREVIEW_CONST.RESOLVER_KEYS.DATA];
  }
}
