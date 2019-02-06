// Test away
import React from 'react';
import ReactDOM from 'react-dom';
import Controls from '../controls/Controls';
import Display from '../display/Display';
import Dashboard from './Dashboard';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';


describe('renders the Dashboard without crashing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dashboard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

})

// test the gate cannot be opened when it is locked
describe('the Control Button component', () => {
  test('the gate button should be disabled when it is locked', () => {
    const component = render(<Dashboard />);
    const component2 = render(<Controls locked="false" />);
    const component3 = render(<Display />);
    const button = component2.getByText(/Lock Gate/i);
    fireEvent.click(button);
    component3.getByText(/Locked/i);
  })
}); 

//test unlocking the gate allows you to be able to open it.
describe('the Control Unlock Button component', () => {
  test('with gate closed/unlocked clicking on lock button should lock it.', () => {
    const component = render(<Dashboard />);
    const component2 = render(<Controls />);
    const component3 = render(<Display />);
    const button = component2.getByText(/Close Gate/i);
    fireEvent.click(button);
    const button2 = component2.getByText(/Lock Gate/i)
    fireEvent.click(button2); 
    component2.getByText(/Unlock Gate/i);
  })
}); 

//test unlocking the gate allows you to be able to open it.
describe('the Control Unlock Button component', () => {
  test('with gate closed/locked clicking on unlock button then open gate should open it.', () => {
    const component = render(<Dashboard />);
    const component2 = render(<Controls locked="true" closed="true"/>);
    const component3 = render(<Display />);
    const button = component2.getByText(/Unlock Gate/i);
    fireEvent.click(button);
    const button2 = component2.getByText(/Open Gate/i);
    fireEvent.click(button2);
    component3.getByText(/Open/i);
  })

/* });  */
//expect(container.firstChild).toHaveClass('foo')
//expect(button).toHaveAttribute('disabled', 'true')
/* describe('the Control Unlock Button component', () => { */

  test('gate closed and locked the open gate button should be disabled', () => {
    const component = render(<Dashboard />);
     const component2 = render(<Controls locked='true' closed='true'/>); 
     const component3 = render(<Display />); 
    const button3 = component2.getByText(/Open Gate/i);
    expect(button3).toHaveAttribute('disabled', '');
  })
}); 

//test the gate cannot be locked while it is open.


//pressing the lock button should toggle the locked red/green led


//pressing the open/close button should toggle the open/close led (right side)