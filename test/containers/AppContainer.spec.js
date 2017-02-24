import React from 'react'
import renderer from 'react-test-renderer'
import AppContainer from '../../src/containers/AppContainer'

describe('AppContainer', function() {
  test('should render without error', () => {
    const component = renderer.create(
      <AppContainer/>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
})
