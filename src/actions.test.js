import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';
import * as actions from './actions';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';




let store;
let mockStore;

beforeEach(() => {
  mockStore = configureMockStore([thunkMiddleware]);
  store = mockStore({});
});



/* configuring a store to handle dispatch 
possibility to export and to use on the tests */
//const mockStore = configureMockStore([thunkMiddleware]);

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

/*describe('requestRobots pending action', () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots());

  const action = store.getActions();
  //console.log('action', action);

  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING
  }

  it('handles requesting robots api', () => {
    expect(action[0])
      .toEqual(expectedAction)
  });
});*/


describe('requestRobotsAction', () => {

  it('should be pending and fail the fetch call', async () => {
    expect.assertions(2);
    const wrongApiLink = 'https://jsonplac';
    await store.dispatch(actions.requestRobots(wrongApiLink));

    const action = store.getActions();

    expect(action[0].type).toEqual(REQUEST_ROBOTS_PENDING);
    expect(action[1].type).toEqual(REQUEST_ROBOTS_FAILED);

  });


  it('should be pending and success', async () => {
    expect.assertions(3);

    /* Testing the API  */
    const testingAPIurl = 'https://jsonplaceholder.typicode.com/todos/1';
    const action = store.getActions();

    await store.dispatch(actions.requestRobots(testingAPIurl));

    expect(action[0].type).toEqual(REQUEST_ROBOTS_PENDING);
    expect(action[1].type).toEqual(REQUEST_ROBOTS_SUCCESS);
    expect(action[1].payload).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false
    });
  });
});