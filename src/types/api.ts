/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Matrix Synapse Admin Api
 * The Admin Api for a Matrix Synapse server.
 * OpenAPI spec version: 1.0.0
 */
import type {
  UsersResponseObject,
  GetUsersParams,
  RoomsResponse,
  GetRoomsParams,
  JoinRoom200,
  JoinRoomRequest
} from './api.schemas'
import { customInstance } from '../custom-instance';


// eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;


  /**
 * This API returns all local user accounts. By default, the response is ordered by ascending user ID.
 */
export const getUsers = (
    params?: GetUsersParams,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<UsersResponseObject>(
      {url: `/v2/users`, method: 'get',
        params
    },
      options);
    }
  
/**
 * The List Room admin API allows server admins to get a list of rooms on their server. 
 */
export const getRooms = (
    params?: GetRoomsParams,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<RoomsResponse>(
      {url: `/v1/rooms`, method: 'get',
        params
    },
      options);
    }
  
/**
 * This API allows an administrator to join an user account with a given user_id to a room with a given room_id_or_alias. You can only modify the membership of local users. The server administrator must be in the room and have permission to invite users.
 */
export const joinRoom = (
    roomIdOrAlias: string,
    joinRoomRequest: JoinRoomRequest,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<JoinRoom200>(
      {url: `/v1/join/${roomIdOrAlias}`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: joinRoomRequest
    },
      options);
    }
  
export type GetUsersResult = NonNullable<Awaited<ReturnType<typeof getUsers>>>
export type GetRoomsResult = NonNullable<Awaited<ReturnType<typeof getRooms>>>
export type JoinRoomResult = NonNullable<Awaited<ReturnType<typeof joinRoom>>>
