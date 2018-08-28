import {Entity, property, model} from '@loopback/repository';
import { Role } from '../shared/domain/enum';

@model()
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
  })
  pictureId: number;

  @property({
    type: 'string',
    required: true,
    default: Role.User
  })
  role: Role;

  constructor(data?: Partial<User>) {
    super(data);
  }
}
