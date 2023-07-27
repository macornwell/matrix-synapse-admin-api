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

