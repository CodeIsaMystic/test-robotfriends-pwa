import React from 'react';
import { create } from "react-test-renderer";


import Header from './Header';
import CounterButton from '../counter-button/CounterButton';



/*   Entering all tests in describe   */
describe('header', () => {

  const header = create(<Header />);


  it('to render Header Component with react test renderer', () => {

    expect(header.toJSON()).toMatchSnapshot();
  });

});