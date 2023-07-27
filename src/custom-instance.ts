import merge from 'lodash/merge'
import Axios, { AxiosRequestConfig } from 'axios'
import * as sdk from 'matrix-js-sdk'
import matrix from 'matrix-js-sdk'
import request from 'request'
matrix.request(request)

let theBaseUrl = ''
let theBearerToken = ''

export type Arguments = {
  baseUrl: string,
}

export type PasswordLogin = {
  username: string,
  password: string
}

export const init = async ({
  username,
  password,
  baseUrl
}: PasswordLogin & Arguments) => {
  const client = sdk.createClient({ baseUrl })
  const results = await client.loginWithPassword(username, password)
  theBaseUrl = baseUrl
  theBearerToken = results.access_token
}

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const AXIOS_INSTANCE = Axios.create({ baseURL: theBaseUrl }) // use your own URL here or environment variable
  const source = Axios.CancelToken.source()
  const promise = AXIOS_INSTANCE(merge({
    ...config,
    ...options,
    cancelToken: source.token,
  }, { headers: {
    ...(theBearerToken 
      ? {
        Authorization: `Bearer ${theBearerToken}`
      }
      : {})
  }})).then(({ data }) => data)

  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled')
  }
  return promise
}
