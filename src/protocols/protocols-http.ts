/* eslint-disable @typescript-eslint/no-extraneous-class */
// eslint-disable-next-line node/no-deprecated-api
import { UrlWithParsedQuery, parse } from 'url'
import { InvalidArgument } from '../errors/invalid-arg'

export class UrlLogin {
  public static parseUrl (url: string): UrlWithParsedQuery {
    if (url === undefined || url === '') {
      throw new InvalidArgument('')
    }
    return parse(url, true)
  }
}

export class UrlUser {
  public static parseUrl (url: string): UrlWithParsedQuery {
    return parse(url, true)
  }
}
