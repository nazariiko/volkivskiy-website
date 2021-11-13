import axios from 'axios';
import { Dispatch } from 'redux';
import { PoemsAction, PoemsActionTypes } from '../types/poems';

export const fetchPoems = () => {
  return async (dispatch: Dispatch<PoemsAction>) => {
    try {
      dispatch({ type: PoemsActionTypes.FETCH_POEMS });
      const poems = await axios.get(
        'https://nazariiko-cors.herokuapp.com/https://ancient-dusk-60975.herokuapp.com/poems',
      );
      dispatch({ type: PoemsActionTypes.FETCH_POEMS_SUCCESS, payload: poems.data });
    } catch (error) {
      dispatch({ type: PoemsActionTypes.FETCH_POEMS_ERROR, payload: 'Error' });
    }
  };
};
