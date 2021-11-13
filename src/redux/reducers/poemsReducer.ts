import { IPoemsState, PoemsAction, PoemsActionTypes } from '../types/poems';

const initialState: IPoemsState = {
  poems: [],
  loading: false,
  error: null,
};

export const poemsReducer = (state = initialState, action: PoemsAction) => {
  switch (action.type) {
    case PoemsActionTypes.FETCH_POEMS:
      return { loading: true, error: null, poems: [] };
    case PoemsActionTypes.FETCH_POEMS_SUCCESS:
      return { loading: false, error: null, poems: action.payload };
    case PoemsActionTypes.FETCH_POEMS_ERROR:
      return { loading: false, error: action.payload, poems: [] };
    default:
      return state;
  }
};
