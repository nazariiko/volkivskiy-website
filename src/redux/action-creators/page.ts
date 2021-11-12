import { Page, PageActionTypes } from '../types/page';

export const setPage = (page: Page) => {
  return {
    type: PageActionTypes.SET_CURRENT_PAGE,
    payload: page,
  };
};
