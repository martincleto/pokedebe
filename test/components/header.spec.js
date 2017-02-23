import React from 'react'
import renderer from 'react-test-renderer'

import Header from '../../src/components/Header'

let result

describe('Header', function() {

  beforeAll(() => {
    renderer.render(<Header />)
    result = renderer.getRenderOutput()
  })

  test('should render without error', () => {
    expect(result.type).toBe('Header')
    expect(result.props.children).toEqual([
      <h1 class="heading heading--level-1">Pokédebe</h1>
    ]);
  });
})
