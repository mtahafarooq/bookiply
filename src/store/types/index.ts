import { initialState as reviewState } from "../../pages/Reviews/ducks/initial-state";

export type State = {

    reviewsState: typeof reviewState;

};

export interface Action {

  type: string;

  payload?: any;

}
