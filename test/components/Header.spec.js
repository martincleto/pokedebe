import React from 'react'
import renderer from 'react-test-renderer'
import Header from 'Components/Header'

describe('Header', function() {
  test('should render without error', () => {
    const component = renderer.create(
      <Header/>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
})
