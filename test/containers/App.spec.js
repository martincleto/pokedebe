
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import { createMemoryHistory } from 'history'
import App from 'Containers/App'

const renderer = ReactTestUtils.createRenderer()

let createLocation = createMemoryHistory().createLocation
let mockProps = {
  location: createLocation('detail/charizard')
}

describe('App', function() {

  let component

  beforeAll(() => {
    renderer.render(<App location={mockProps.location} />);
    component = renderer.getRenderOutput()
  })

  it('should render without error', () => {
    expect(component).toMatchSnapshot()
  });
})
