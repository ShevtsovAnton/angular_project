import { UserModel } from '../models/user.model';

export class User implements UserModel {
  name = {
    first: '',
    last: ''
  };

  constructor(
    public id: number,
    public fakeToken: string,
    public login: string,
    public password: string,
    firstName: string,
    lastName: string
  ) {
    this.name.first = firstName;
    this.name.last = lastName;
  }
}
