import React from 'react';
import { shallow } from 'enzyme';

import CounterButton from './CounterButton';





/*   Entering all tests in describe   */
describe('counterButtonw', () => {

  //const counterButton = shallow(<CounterButton />);

  it('expect to render counter button component', () => {
    const mockColor = 'red';

    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
  });



  it('correctly increments the counter', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} />);

    expect(wrapper).toMatchSnapshot();


    /*  Simulating click event then test if its fail or not
    and look up what s expected */
    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 2 })


    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 3 })


    //expect(wrapper.props()).toEqual({ color: 'red' })
    expect(wrapper.props().color).toEqual('red')
  });

});