/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Models from '../containers/Models';

describe('Model', () => {
  it('Renders Model page correctly', () => {
    const comp = renderer.create(
      <Provider store={store}>
        <Router>
          <Models />
        </Router>
      </Provider>,
    );
    const tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
