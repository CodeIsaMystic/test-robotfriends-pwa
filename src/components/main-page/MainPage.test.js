import React from 'react';
import { shallow } from 'enzyme';


import MainPage from './MainPage';



/*   Entering all tests in describe   */
describe('mainPage', () => {

  //const MainPage = shallow(<MainPage />);
  let wrapper;

  /**
   * Jest method, make sure it runs before each one 
   * over tests */
  beforeEach(() => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: false
    }

    wrapper = shallow(<MainPage {...mockProps} />);
  });

  it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('filters robots correctly, test1', () => {
    /* instance() will give an access to ALL Methods that MainPage have  */
    expect(wrapper.instance().filterRobots()).toEqual([])


  });


  it('filters robots correctly, test2', () => {
    /** Creating a special case to test all props out */
    const mockProps2 = {
      onRequestRobots: jest.fn(),
      robots: [{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
      }],
      searchField: 'a',
      isPending: false
    }
    const wrapper2 = shallow(<MainPage {...mockProps2} />)

    expect(wrapper2.instance().filterRobots()).toEqual([])
  });

  /* Repeating the process on a alternative way  */
  it('filters robots correctly, test3', () => {
    /** Creating a special case to test all props out */
    const mockProps3 = {
      onRequestRobots: jest.fn(),
      robots: [{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
      }],
      searchField: 'john',
      isPending: false
    }
    const wrapper3 = shallow(<MainPage {...mockProps3} />)

    expect(wrapper3.instance().filterRobots()).toEqual([
      {
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
      }
    ])
  });

  /* Repeating the process on a alternative way  */
  it('filters robots correctly, test4', () => {

    const mockProps4 = {
      onRequestRobots: jest.fn(),
      robots: [{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
      }],
      searchField: 'a',
      isPending: false
    }

    const filteredRobots = [];
    const wrapper4 = shallow(<MainPage {...mockProps4} />)

    expect(wrapper4.instance().filterRobots()).toEqual(filteredRobots)
  });


  it('show the loading page, test5', () => {
    const mockProps5 = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: "",
      isPending: true
    }

    const wrapper5 = shallow(<MainPage {...mockProps5} />)
    expect(wrapper5).toEqual({});
  });

});