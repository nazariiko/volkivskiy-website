import axios from 'axios';
import { Dispatch } from 'redux';
import { PoemsAction, PoemsActionTypes } from '../types/poems';

export const fetchPoems = () => {
  return async (dispatch: Dispatch<PoemsAction>) => {
    try {
      let poems: any[] = [];
      let batch;
      dispatch({ type: PoemsActionTypes.FETCH_POEMS });
      batch = await axios.get(
        'https://nazariiko-cors.herokuapp.com/https://ancient-dusk-60975.herokuapp.com/poems?page=0-10',
      );
      poems = [...poems, ...batch.data];
      batch = await axios.get(
        'https://nazariiko-cors.herokuapp.com/https://ancient-dusk-60975.herokuapp.com/poems?page=11-20',
      );
      poems = [...poems, ...batch.data];
      batch = await axios.get(
        'https://nazariiko-cors.herokuapp.com/https://ancient-dusk-60975.herokuapp.com/poems?page=21-30',
      );
      poems = [...poems, ...batch.data];
      batch = await axios.get(
        'https://nazariiko-cors.herokuapp.com/https://ancient-dusk-60975.herokuapp.com/poems?page=31-40',
      );
      poems = [...poems, ...batch.data];
      batch = await axios.get(
        'https://nazariiko-cors.herokuapp.com/https://ancient-dusk-60975.herokuapp.com/poems?page=41-50',
      );
      poems = [...poems, ...batch.data];
      batch = await axios.get(
        'https://nazariiko-cors.herokuapp.com/https://ancient-dusk-60975.herokuapp.com/poems?page=51-60',
      );
      poems = [...poems, ...batch.data];
      batch = await axios.get(
        'https://nazariiko-cors.herokuapp.com/https://ancient-dusk-60975.herokuapp.com/poems?page=61-70',
      );
      poems = [...poems, ...batch.data];
      batch = await axios.get(
        'https://nazariiko-cors.herokuapp.com/https://ancient-dusk-60975.herokuapp.com/poems?page=71-80',
      );
      poems = [...poems, ...batch.data];
      batch = await axios.get(
        'https://nazariiko-cors.herokuapp.com/https://ancient-dusk-60975.herokuapp.com/poems?page=81-90',
      );
      poems = [...poems, ...batch.data];
      localStorage.setItem('poems', JSON.stringify(poems));
      dispatch({ type: PoemsActionTypes.FETCH_POEMS_SUCCESS, payload: poems });
    } catch (error) {
      dispatch({ type: PoemsActionTypes.FETCH_POEMS_ERROR, payload: 'Error' });
    }
  };
};
