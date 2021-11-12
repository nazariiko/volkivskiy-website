import { IPageState, PageAction, PageActionTypes } from '../types/page';

const initialState: IPageState = {
  currentPage: '/',
};

export const pageReducer = (state = initialState, action: PageAction): IPageState => {
  switch (action.type) {
    case PageActionTypes.SET_CURRENT_PAGE:
      return { currentPage: action.payload };
    default:
      return state;
  }
};
