import React, { Component } from 'react';

import CardList from '../card-list/CardList';
import SearchBox from '../search-box/SearchBox';
import Scroll from '../scroll/Scroll';
import ErrorBoundry from '../error-boundry/ErrorBoundry';
import Header from '../header/Header';

import './MainPage.css';



/**
 * Considering tests in a simple and clean way to do,
 * We move the all App.js rendered component to 
 * The MainPage.js component to test it out
 * Removing all complexity of Redux to simplify 
 */


class MainPage extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    })
  }

  render() {
    const { onSearchChange, isPending } = this.props;

    return (
      <div className='tc'>
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? <h1>Loading</h1> :
            <ErrorBoundry>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
