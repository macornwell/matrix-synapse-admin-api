const invoke = require('lodash/invoke')
const { ArgumentParser } = require('argparse')
const { create } = require('../dist')

const _parseArgs = () => {
  const parser = new ArgumentParser({
    description: 'Runs a command from the api from the cli.',
  })
  parser.add_argument('hostname', { help: 'The hostname to use.' })
  parser.add_argument('bearerToken', { help: 'The bearer token to use.' })
  parser.add_argument('command', { help: 'The command to run' })
  parser.add_argument('-d', '--data', {
    help: 'JSON inputs for the command',
    default: '[]',
  })
  parser.add_argument('-t', '--http', {
    help: 'Sets protocol to http instead of https.',
    action: 'store_true',
  })
  parser.add_argument('-e', '--baseEndpoint', {
    help: 'The base endpoint. Example: /_synapse/admin',
  })
  return parser.parse_args()
}

const main = async () => {
  const args = _parseArgs()

  const client = await create({
    https: !args.http,
    baseEndpoint: args.baseEndpoint,
    hostname: args.hostname,
    bearerToken: args.bearerToken,
  })

  const rawData = JSON.parse(args.data)
  const data = Array.isArray(rawData) ? rawData : [rawData]

  const result = await invoke(client, args.command, ...data)
  console.info(result)
}

if (require.main === module) {
  main()
}
