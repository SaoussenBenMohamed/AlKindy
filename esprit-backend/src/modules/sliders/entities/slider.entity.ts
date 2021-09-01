import { Entity, Column, ObjectIdColumn, Index, BeforeInsert, BeforeUpdate } from 'typeorm';
import { Transform } from 'class-transformer';
import { ObjectID } from 'mongodb';

import { IUser } from '../../../modules/users/interfaces/user.interface';
import { transformEntity } from '../../../shared/transformEntity.utlis';
import { convertBoolean } from '../../../shared/convertBoolean.utils';

@Entity('slider')
export class SliderEntity {
  constructor() {
    this.status = true;
  }

  @Transform(transformEntity)
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  @Index({ unique: true })
  title: string;

  @Column()
  date: Date;

  @Column()
  status: boolean;

  @Column()
  image: string;

  @Column()
  url: string;

  @Column()
  titleDescription: string;

  @Column()
  description: string;

  @Column()
  btnName: string;

  @Column()
  @Transform(transformEntity)
  userCreated: ObjectID | IUser;

  @Column()
  createdAt: Date;

  @Column()
  @Transform(transformEntity)
  userUpdated: ObjectID | IUser;

  @Column()
  lastUpdateAt: Date;

  /**************** ACTIONS ****************/
  @BeforeInsert()
  @BeforeUpdate()
  private beforeActions() {
    this.lastUpdateAt = new Date();
    this.status = convertBoolean(this.status);
  }

  @BeforeInsert()
  private beforeInsertActions() {
    this.createdAt = new Date();
  }
}
