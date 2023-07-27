export * from './types/api.schemas'
import { init, Arguments, PasswordLogin } from './custom-instance'
import * as funcs from './types/api'


export const login = async (args:Arguments&PasswordLogin) => {
  await init(args)
  return {
    ...funcs
  }
}
