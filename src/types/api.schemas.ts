/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Matrix Synapse Admin Api
 * The Admin Api for a Matrix Synapse server.
 * OpenAPI spec version: 1.0.0
 */
export type JoinRoom200 = {
  room_id?: string;
};

export type GetRoomsDir = typeof GetRoomsDir[keyof typeof GetRoomsDir];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetRoomsDir = {
  f: 'f',
  b: 'b',
} as const;

export type GetRoomsOrderBy = typeof GetRoomsOrderBy[keyof typeof GetRoomsOrderBy];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetRoomsOrderBy = {
  alphabetical: 'alphabetical',
  size: 'size',
  name: 'name',
  canonical_alias: 'canonical_alias',
  joined_members: 'joined_members',
  joined_local_members: 'joined_local_members',
  version: 'version',
  creator: 'creator',
  encryption: 'encryption',
  federatable: 'federatable',
  public: 'public',
  join_rules: 'join_rules',
  guest_access: 'guest_access',
  history_visibility: 'history_visibility',
  state_events: 'state_events',
} as const;

export type GetRoomsParams = {
/**
 * Offset in the returned list. Defaults to 0.
 */
from?: number;
/**
 * Maximum amount of rooms to return. Defaults to 100.
 */
limit?: number;
/**
 * The method in which to sort the returned list of rooms.
 */
order_by?: GetRoomsOrderBy;
/**
 * Direction of room order. Either f for forwards or b for backwards. Setting this value to b will reverse the above sort order. Defaults to f.
 */
dir?: GetRoomsDir;
/**
 * Filter rooms by their room name, canonical alias and room id.
 */
search_term?: string;
};

export type GetUsersParams = {
/**
 * Is optional and filters to only return users with user IDs that contain this value. This parameter is ignored when using the name parameter.
 */
user_id?: string;
/**
 * Is optional and filters to only return users with user ID localparts or displaynames that contain this value.
 */
name?: string;
/**
 * string representing a bool - Is optional and if false will exclude guest users. Defaults to true to include guest users.
 */
guests?: boolean;
/**
 * string representing a bool - Is optional and if true will include deactivated users. Defaults to false to exclude deactivated users.
 */
deactivated?: boolean;
/**
 * string representing a positive integer - Is optional but is used for pagination, denoting the maximum number of items to return in this call. Defaults to 100.
 */
limit?: number;
/**
 * string representing a positive integer - Is optional but used for pagination, denoting the offset in the returned results. This should be treated as an opaque value and not explicitly set to anything other than the return value of next_token from a previous call. Defaults to 0.
 */
from?: number;
/**
 * The method by which to sort the returned list of users. If the ordered field has duplicates, the second order is always by ascending name, which guarantees a stable ordering. Valid values are:
 */
order_by?: string;
};

export type RoomHistoryVisibility = typeof RoomHistoryVisibility[keyof typeof RoomHistoryVisibility];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const RoomHistoryVisibility = {
  invited: 'invited',
  joined: 'joined',
  shared: 'shared',
  world_readable: 'world_readable',
} as const;

export type RoomGuestAccess = typeof RoomGuestAccess[keyof typeof RoomGuestAccess];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const RoomGuestAccess = {
  can_join: 'can_join',
  forbidden: 'forbidden',
} as const;

export type RoomJoinRules = typeof RoomJoinRules[keyof typeof RoomJoinRules];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const RoomJoinRules = {
  public: 'public',
  knock: 'knock',
  invite: 'invite',
  private: 'private',
} as const;

export interface Room {
  room_id?: string;
  name?: string;
  canonical_alias?: string;
  joined_members?: number;
  joined_local_members?: number;
  version?: string;
  creator?: string;
  encryption?: string;
  federatable?: string;
  public?: string;
  join_rules?: RoomJoinRules;
  guest_access?: RoomGuestAccess;
  history_visibility?: RoomHistoryVisibility;
  state_events?: number;
  room_type?: string | null;
}

export interface RoomsResponse {
  offset?: number;
  total_rooms?: number;
  next_batch?: number;
  prev_batch?: number;
  rooms?: Room[];
}

export interface User {
  name?: string;
  is_guest?: boolean;
  admin?: boolean;
  user_type?: string;
  deactivated?: boolean;
  erased?: boolean;
  shadow_banned?: boolean;
  displayname?: string;
  avatar_url?: string;
  creation_ts?: number;
}

export interface UsersResponseObject {
  next_token?: string;
  total?: number;
  users?: User[];
}

/**
 * A Join Room Request
 */
export interface JoinRoomRequest {
  /** Fully qualified user: for example, @user:server.com. */
  user_id: string;
}

