jest.unmock('Services/api')

const fetchMock = require('fetch-mock')

import {api} from 'Services/api'

let mockResponseObj = {
  id: 1,
  name: 'bulbasaur'
}

describe('api.js', () => {

  it('should have a baseUrl property defined', () => {
    expect(api.baseUrl).toBeDefined()
  })

  it('should retrieve the data in a successful request', done => {
    fetchMock.get('*', mockResponseObj)

    let successTest = response => {
      expect(response.id).toEqual(1)
      expect(response.name).toEqual('bulbasaur')
      done()
    }

    let failTest = error => {
      expect(error).not.toBeDefined()
      done()
    }

    api.get('some/endpoint')
      .then(successTest)
      .catch(failTest)
  })
})
