import React from 'react';
import { shallow } from 'enzyme';


import App from './App';


//const app = shallow(<App />);

it('expect to render counter button component', () => {
  const mockStore = {
    robots: [],
    searchField: ''
  };

  expect(shallow(<App store={mockStore} />)).toMatchSnapshot();
});

