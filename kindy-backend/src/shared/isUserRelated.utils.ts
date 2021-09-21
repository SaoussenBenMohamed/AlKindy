import { UserEntity } from './../modules/users/entities/user.entity';
import { Repository, ObjectLiteral } from 'typeorm';
import { throwError } from './throw-error.utils';

/**
 * Check if the given user is related to the entity
 * @param user  corresponding the current user
 * @param relatedRdi id of the related Rdi entity
 * @param relatedClub id of the related Club entity
 * @example {id : "1234566"}
 * @returns boolean representing if the entity is owned by the user
 */
export async function isUserRelated(user: UserEntity, relatedRdi: string, relatedClub: string): Promise<boolean> {
  let isRelated = false;
  if (relatedClub === undefined && relatedRdi === undefined) {
    throwError({ user: "You can't do that :)" }, 'Unauthorized to access this part!', 403);
  }
  isRelated = user.rdi === relatedRdi || user.club === relatedClub;
  if (!isRelated) {
    throwError({ user: "You can't do that :)" }, 'Unauthorized to access this part!', 403);
  }
  return isRelated;
}
