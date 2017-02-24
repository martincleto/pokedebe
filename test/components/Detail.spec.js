import React from 'react'
import renderer from 'react-test-renderer'
import Detail from '../../src/components/Detail'

describe('Detail', function() {
  test('should render without error', () => {
    const component = renderer.create(
      <Detail/>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
})
