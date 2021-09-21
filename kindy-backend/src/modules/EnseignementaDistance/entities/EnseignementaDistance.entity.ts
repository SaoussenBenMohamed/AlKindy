import { Entity, Column, ObjectIdColumn, Index, BeforeInsert, BeforeUpdate } from 'typeorm';
import { Transform } from 'class-transformer';
import { ObjectID } from 'mongodb';

import { IUser } from '../../../modules/users/interfaces/user.interface';
import { transformEntity } from '../../../shared/transformEntity.utlis';

@Entity('EnseignementaDistance')
export class EnseignementaDistanceEntity {
  @Transform(transformEntity)
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  @Index({ unique: true })
  title: string;

  @Column()
  image: string;

  @Column()
  url: string;

  @Column()
  description: string;

  @Column()
  members: string[];

  @Column()
  @Transform(transformEntity)
  userCreated: ObjectID | IUser;

  @Column()
  @Transform(transformEntity)
  userUpdated: ObjectID | IUser;

  @Column()
  createdAt: Date;

  @Column()
  lastUpdateAt: Date;

  /**************** ACTIONS ****************/
  @BeforeInsert()
  @BeforeUpdate()
  private beforeActions() {
    if (typeof this.members === 'string') {
      this.members = [this.members];
    }
    this.lastUpdateAt = new Date();
  }

  @BeforeInsert()
  private beforeInsertActions() {
    this.createdAt = new Date();
  }
}
