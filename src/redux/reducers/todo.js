import {Map, OrderedSet} from "immutable";

const initialState = Map({
  items: OrderedSet(),
  entities: Map()
});

const Logic = {};



function reducer(state = initialState, action) {
  if (Logic[action.type] !== 'function') return state;
  return Logic[action.type](state, action);
}

export default reducer;