import { createStore, AnyAction } from "redux";
import { MakeStore, createWrapper, Context, HYDRATE } from "next-redux-wrapper";
import { actionTypes } from "./actions";

export interface State {
  tick: string;
  user: any;
}

// create your reducer
const reducer = (
  state: State = { tick: "init", user: null },
  action: AnyAction
) => {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      };
      if (state.tick) nextState.tick = state.tick; // preserve count value on client side navigation
      return nextState;
    case actionTypes.updateTick:
      return { ...state, tick: action.payload };
    case actionTypes.updateUser:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

// create a makeStore function
const makeStore: MakeStore<State> = (context: Context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper<State>(makeStore, { debug: true });
