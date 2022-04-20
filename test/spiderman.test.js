const Spiderman = require('../app/spiderman')

describe('Test Suite Dummy Description', () => {
  test('Case 1 Dummy', () => {
    const resultOfSomething = 1 + 2
    expect(resultOfSomething).toBe(3)
  })
})

describe('Unit Test para la clase Spiderman', () => {
  test('1) Crea un objeto', () => {
    const tobeyMaguire = new Spiderman('Spider-Man (2002)', 46, 'Tobey Maguire', 4, 'Marvel Entertainmen')

    expect(tobeyMaguire.name).toBe('Spider-Man (2002)')
    expect(tobeyMaguire.age).toBe(46)
    expect(tobeyMaguire.actor).toBe('Tobey Maguire')
    expect(tobeyMaguire.movies).toBe(4)
    expect(tobeyMaguire.studio).toBe('Marvel Entertainmen')
  })
})
