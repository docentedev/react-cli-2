import React from 'react';
import ReactDOM from 'react-dom';
import $(pascal) from './$(pascal)';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<$(pascal) />, div);
  ReactDOM.unmountComponentAtNode(div);
});
