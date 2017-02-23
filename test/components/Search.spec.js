import React from 'react'
import renderer from 'react-test-renderer'
import Search from 'Components/Search'

describe('Search', function() {
  test('should render without error', () => {
    const component = renderer.create(
      <Search/>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
})
