/** Shallow is the most used, the others respond to some particular cases
 * 
 * Mount: a full DOM rendering
 *  ==> components which interact with the DOM API
 * Render: to render to a static HTML 
 *  ==> in between shallow & mount
 */
//import { shallow } from 'enzyme';

import React from 'react';
import { create } from "react-test-renderer";
import Card from './Card';


//console.log(shallow(<Card />)); 

/* SHALLOW render this Card component  
 * one thing at the time, like unit test 
it('to render Card Component', () => {
  expect(shallow(<Card />).length).toEqual(1);
});
*/



/* SNAPSHOT: takes a picture and shows if there are 
some changes as a test failed
=> then press w: back on the watch jest mode 
  => possibility to update if the change is needed




const card = shallow(<Card />);

it('to render Card Component', () => {
  expect(card).toMatchSnapshot();
});


  Snapshot with react-test-renderer  */
const card = create(<Card />);


it('to render Card Component with react test renderer', () => {
  expect(card.toJSON()).toMatchSnapshot();
});
