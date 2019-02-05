// Test away!
import React from 'react';
import ReactDOM from 'react-dom';
import Display from './display';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

describe('renders the Display without crashing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

  describe('the Lock Display component', () => {
    test('the lock will display the correct led', () => {
      const component = render(<Display locked="false" />);
      component.getByText(/Locked/i);
    });
  });

  describe('the Gate Display component', () => {
    test('the gate will display the correct led', () => {
      const component = render(<Display closed="false" />);
      component.getByText(/Closed/i);
    });
  });