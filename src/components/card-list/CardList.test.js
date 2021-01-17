//import { shallow } from 'enzyme';

import React from 'react';
import { create } from "react-test-renderer";
import CardList from './CardList';



/*   Entering all tests in describe   */
describe('cardList', () => {

  const mockRobots = [
    {
      id: 1,
      name: 'Jon Snow',
      username: 'JonJon',
      email: 'jon@gmail.com'
    }
  ];

  const cardList = create(<CardList robots={mockRobots} />);


  it('to render CardList Component with react test renderer', () => {

    expect(cardList.toJSON()).toMatchSnapshot();
  });

});