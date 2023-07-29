export * from './types/api.schemas'
import { init as subInit, Arguments } from './custom-instance'
import * as funcs from './types/api'

export const create = (args: Arguments) => {
  subInit(args)
  return {
    ...funcs,
  }
}
