import { Map, OrderedSet } from 'immutable';
import { USERS_LOAD } from './UserConstants';

const initialState = Map({
  result: OrderedSet(),
  entities: Map(),
});

const Logic = {};

Logic[USERS_LOAD] = (state, action) => state
    .set('loading', true);

Logic[USERS_LOAD.SUCCESS] = (state, action) => {
  const entities = state.get('entities').mergeDeep(action.entities);
  const result = state.get('result').concat(action.result);
  console.log(entities.toJS(), result);
  return state
    .set('result', result)
    .set('entities', entities)
    .set('loading', false);
};

Logic[USERS_LOAD.FAILURE] = (state, action) => state
    .set('loading', false);

function reducer(state = initialState, action) {
  if (Logic[action.type] !== 'function') return state;
  return Logic[action.type](state, action);
}

export default reducer;
