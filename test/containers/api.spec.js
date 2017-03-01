jest.unmock('Containers/api')

import {api} from 'Containers/api'

let mockData = {
  name: 'bulbasaur',
  id: 1
}

describe('api.js', () => {

  let results

  beforeEach(() => {

  })

  it('should have a base URL defined', () => {
    expect(api.baseUrl).toBeDefined()
  })

  it('should retrieve data from a succesful request', done => {
    let successTest = data => {
      expect(data.name).toEqual('bulbasaur')
      expect(data.id).toEqual(1)
    }

    let failTest = error => {
      expect(error).toBeUndefined()
    }

    fetch.mockResponseOnce(JSON.stringify(mockData), {status: 200})

    api.get('some/endpoint')
      // .then(successTest)
      // .catch(failTest)
      // .finally(done)
  })

  xit('should log an error data from a failed request', () => {
    api.get('some/endpoint').then(data => {
      results = data
      done()
    })
    expect(results.error).toBeDefined()
  })
})
