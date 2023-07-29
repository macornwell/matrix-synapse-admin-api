const fetch = require('node-fetch')

// eslint-disable-next-line functional/immutable-data
global.fetch = fetch

const { ArgumentParser } = require('argparse')
const sdk = require('matrix-js-sdk')

const _parseArgs = () => {
  const parser = new ArgumentParser({
    description:
      'Logs into the Api and provides a bearer token. Provided as a helpful tool for using the api.',
  })
  parser.add_argument('hostname', { help: 'The hostname to use.' })
  parser.add_argument('-u', '--username', {
    help: 'A username to login with. Requires password.',
  })
  parser.add_argument('-p', '--password', {
    help: 'A password to login with. Requires username.',
  })
  return parser.parse_args()
}

const _loginGetToken = async args => {
  if (args.token) {
    return args.token
  }
  const { username, password } = args
  if (!username || !password) {
    throw new Error(`Must include both the username and password`)
  }
  const client = sdk.createClient({ baseUrl: args.hostname })
  const results = await client.loginWithPassword(username, password)
  return results.access_token
}

const main = async () => {
  const args = _parseArgs()
  const token = await _loginGetToken(args)
  console.info(token)
}

if (require.main === module) {
  main()
}
