export interface IPoem {
  id: string;
  name: string;
  text: string[];
  image: {
    imageUrl: string | undefined;
    height: number | undefined;
    width: number | undefined;
  };
}

export interface IPoemsState {
  poems: IPoem[];
  loading: boolean;
  error: null | string;
}

export enum PoemsActionTypes {
  FETCH_POEMS = 'FETCH_POEMS',
  FETCH_POEMS_SUCCESS = 'FETCH_POEMS_SUCCESS',
  FETCH_POEMS_ERROR = 'FETCH_POEMS_ERROR',
}

interface IFetchPoemsAction {
  type: PoemsActionTypes.FETCH_POEMS;
}

interface IFetchPoemsSuccessAction {
  type: PoemsActionTypes.FETCH_POEMS_SUCCESS;
  payload: any[];
}

interface IFetchPoemsErrorAction {
  type: PoemsActionTypes.FETCH_POEMS_ERROR;
  payload: any;
}

export type PoemsAction = IFetchPoemsAction | IFetchPoemsSuccessAction | IFetchPoemsErrorAction;
