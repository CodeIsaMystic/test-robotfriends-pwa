import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';
import * as actions from './actions';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';



/* configuring a store to handle dispatch 
possibility to export and to use on the tests */
const mockStore = configureMockStore([thunkMiddleware]);

describe('setSearchfield actions', () => {
  it('should return an action to search robots', () => {
    const text = "heyyy",
      expectedAction = {
        type: CHANGE_SEARCHFIELD,
        payload: text
      };

    expect(actions.setSearchField(text)).toEqual(expectedAction)
  });
});




describe('requestRobots pending action', () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots());

  const action = store.getActions();
  console.log('action', action);

  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING
  }

  it('handles requesting robots api', () => {
    expect(action[0])
      .toEqual(expectedAction)
  });
});