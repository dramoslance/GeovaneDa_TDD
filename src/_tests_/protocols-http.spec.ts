import { InvalidArgument } from '../errors/invalid-arg'
import { UrlLogin, UrlUser } from '../protocols/protocols-http'

describe('Protocols Http and Queries', () => {
  test('Url login', () => {
    const parseUrl = UrlLogin.parseUrl('http://localhost:3000/login')

    expect(parseUrl.href).toBe('http://localhost:3000/login')
    expect(parseUrl.port).toBe('3000')
  })

  test('Response query', () => {
    const parseUrl = UrlLogin.parseUrl('http://localhost:3000/login?user=user&password=password')

    const expectedParams = {
      user: 'user',
      password: 'password'
    }

    expect(parseUrl.query).toEqual(expectedParams)
  })

  test('Url user', () => {
    const parseUrl = UrlUser.parseUrl('http://localhost:3000/user')

    expect(parseUrl.href).toBe('http://localhost:3000/user')
  })
  // http://localhost:3000/user

  test('User response query', () => {
    const parseUrl = UrlUser.parseUrl('http://localhost:3000/user?user=user&password=password&name=name&lastname=lastname')

    const expectedQuery = {
      user: 'user',
      password: 'password',
      name: 'name',
      lastname: 'lastname'
    }
    expect(parseUrl.query).toEqual(expectedQuery)
  })
  // http://localhost:3000/user?user=user&password=password&name=name&lastname=lastname

  test('Url Error', () => {
    function expectError (): void {
      UrlLogin.parseUrl('')
    }

    expect(expectError).toThrowError(new InvalidArgument(''))
  })
})
