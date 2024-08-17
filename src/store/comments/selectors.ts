import { State } from '../../types/state';
import { Comments } from '../../types/types';
import { NameSpace } from '../const';

export const getComments = (state: State): Comments => state[NameSpace.Comments].comments;
export const getPostingStatus = (state: State): boolean => state[NameSpace.Comments].isPostingComment;
