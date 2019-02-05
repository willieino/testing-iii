



// Test away!
import React from 'react';
import ReactDOM from 'react-dom';
import Controls from './Controls';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';


describe('renders the Controls without crashing', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Controls />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  
  }) 
