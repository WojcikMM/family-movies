import {
  Component,
  Input
} from '@angular/core';
import { MoviesEntity } from '@movie-space/features/movie-list';

@Component({
  selector: 'ms-list-movie-info-grid',
  templateUrl: './movie-info-grid.component.html',
  styleUrls: ['./movie-info-grid.component.scss']
})
export class MovieInfoGridComponent {

  @Input() movie: MoviesEntity;
  @Input() selectedGenreIds: number[];
}