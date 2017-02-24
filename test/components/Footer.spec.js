import React from 'react'
import renderer from 'react-test-renderer'
import Footer from '../../src/components/Footer'

describe('Footer', function() {
  test('should render without error', () => {
    const component = renderer.create(
      <Footer/>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
})
