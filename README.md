# Matrix Synapse Admin Api

A Typescript Implementation of the Matrix Synapse Admin Api.
The Typescript is generated from an included Openapi spec of the Matrix Synapse Admin Api.

# How To Use
## Example: Join a User To A Room
```
import { create } = require('matrix-synapse-admin-api')

const client = create({
  hostname: 'my-synapse-server.com',
  bearerToken: 'recieved-from-a-valid-matrix-login',
})

const userResponse = await client.getUsers({ name: 'unique-name' })
const myUser = userResponse.users[0]

const roomResponse = await client.getRooms({ search_term: 'my-room' })
const myRoom = roomResponse.rooms[0]

await client.joinRoom(myRoom.room_id, myUser.name)
```


## Development

NOTE: This is a work in progress, and all help in adding feature parity would be greatly appreciated.
