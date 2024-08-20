import { AuthorizationStatus } from '../../const';
import { State } from '../../types/state';
import { UserData } from '../../types/types';
import { NameSpace } from '../const';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUser = (state: State): UserData | undefined => state[NameSpace.User].user;
