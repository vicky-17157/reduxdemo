import * as actions from '../actions/postact';

export const initialState = {
  demos: [],
  loading: false,
  hasErrors: false,
}

export default function demosReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_DEMOS:
      return { ...state, loading: true }
    case actions.GET_DEMOS_SUCCESS:
      return { demos: action.payload, loading: false, hasErrors: false }
    case actions.GET_DEMOS_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}