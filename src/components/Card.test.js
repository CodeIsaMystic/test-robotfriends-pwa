/** Shallow is the most used, the others respond to some particular cases
 * 
 * Mount: a full DOM rendering
 *  ==> components which interact with the DOM API
 * Render: to render to a static HTML 
 *  ==> in between shallow & mount
 */
import { shallow, mount, render } from 'enzyme';

import React from 'react';
import Card from './Card';


//console.log(shallow(<Card />)); 


/* shallow render this Card component  
 * one thing at the time, like unit test
 */
it('to render Card Component', () => {
  expect(shallow(<Card />).length).toEqual(1);
});