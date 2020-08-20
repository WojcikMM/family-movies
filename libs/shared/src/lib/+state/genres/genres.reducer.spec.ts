import { GenreEntity } from '../../models';
import * as GenresActions from './genres.actions';
import { State, initialState, reducer } from './genres.reducer';

describe('Genres Reducer', () => {
  const createGenresEntity = (id: number, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as GenreEntity);

  beforeEach(() => {});

  describe('valid Genres actions', () => {
    it('loadGenresSuccess should return set the list of known Genres', () => {
      const genres = [
        createGenresEntity(1),
        createGenresEntity(2),
      ];
      const action = GenresActions.loadGenresSuccess({ genres });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
