jest.unmock('../src/index')

import React from 'react'
import {hashHistory} from 'react-router'

import index from '../src/index'

describe('index.js', () => {
  beforeEach(() => {
    fetch.resetMocks()
    fetch.mockResponse(JSON.stringify({
      "id": 1,
      "name": "bulbasaur"
    }))
  })

  it('should render the default page', function() {
    expect(document.querySelector('.search')).not.toBeNull();
  })

  it('should render the detail page', function() {
    hashHistory.push('/detail/bulbasaur')

    expect(document.querySelector('.detail')).not.toBeNull();
  })
})
