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

 describe('the Button components', () => {
  test('the button functions properly', () => {
   /*  const component = render(<Display />); */
    const component = render(<Dashboard />);
     const component2 = render(<Controls locked="false"/>);  
    const button = component2.getByText(/Lock Gate/i);
    fireEvent.click(button);
    const component3 = render(<Display />);
    component3.getByText(/Locked/i);
   
   /*  const balls = component.getByTestId('balls')
    expect(balls).toHaveTextContent('1'); */
  })

}); 