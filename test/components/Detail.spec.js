import React from 'react'
import renderer from 'react-test-renderer'
import Detail from 'Components/Detail'

let mockProps = {
  data: {
    name: 'dragonite'
  }
}

describe('Detail', function() {
  test('should render without error', () => {
    const component = renderer.create(
      <Detail data={mockProps.data} />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
})
