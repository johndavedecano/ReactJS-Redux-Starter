import { normalize, schema } from 'normalizr';
import { USERS_LOAD } from './UserConstants';
import UserSchema from './UserSchema';

export function loadUsers(params) {
  return (dispatch, getState, client) => {
    return new Promise(() => {
      dispatch({ type: USERS_LOAD });
      client.get('https://randomuser.me/api', { params })
        .then(response => response.data.results)
        .then((results) => {
          const normalized = normalize(results, new schema.Array(UserSchema));
          dispatch({
            type: USERS_LOAD.SUCCESS,
            entities: normalized.entities.users || {},
            result: normalized.result
          });
        })
        .catch(() => {
          dispatch({
            type: USERS_LOAD.FAILURE
          });
        });
    });
  };
}
