const fetch = require('node-fetch')
global.fetch = fetch

const invoke = require('lodash/invoke')
const { ArgumentParser } = require('argparse')
const { login } = require('../dist')


const _parseArgs = () => {
  const parser = new ArgumentParser({
    description: 'Runs a command from the api from the cli.',
  })
  parser.add_argument('baseUrl', { help: 'The base url for the server.'})
  parser.add_argument('username', { help: 'The username to login with.'})
  parser.add_argument('password', { help: 'The password to login with.'})
  parser.add_argument('command', { help: 'The command to run' })
  parser.add_argument('-d', '--data', { help: 'JSON inputs for the command', default: '[]'})
  return parser.parse_args()
}

const main = async () => {
  const args = _parseArgs()

  const client = await login({
    baseUrl: args.baseUrl,
    username: args.username,
    password: args.password,
  })

  const rawData = JSON.parse(args.data)
  const data = Array.isArray(rawData)
    ? rawData
    : [rawData]

  const result = await invoke(client, args.command, ...data)
  console.info(result)
}

if (require.main === module) {
  main()
}
