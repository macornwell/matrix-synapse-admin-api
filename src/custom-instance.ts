import merge from 'lodash/merge'
import Axios, { AxiosRequestConfig } from 'axios'

let theBaseUrl = ''
let theBearerToken = ''

export type Arguments = {
  hostname: string
  accessToken: string
  baseEndpoint?: string
  https?: boolean
}

export const init = ({
  accessToken,
  hostname,
  baseEndpoint = '/_synapse/admin',
  https = true,
}: Arguments) => {
  theBaseUrl = `${https ? 'https' : 'http'}://${hostname}${baseEndpoint}`
  theBearerToken = accessToken 
}

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  const AXIOS_INSTANCE = Axios.create({ baseURL: theBaseUrl }) // use your own URL here or environment variable
  const source = Axios.CancelToken.source()
  const promise = AXIOS_INSTANCE(
    merge(
      {
        ...config,
        ...options,
        cancelToken: source.token,
      },
      {
        headers: {
          ...(theBearerToken
            ? {
                Authorization: `Bearer ${theBearerToken}`,
              }
            : {}),
        },
      }
    )
  ).then(({ data }) => data)

  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled')
  }
  return promise
}
