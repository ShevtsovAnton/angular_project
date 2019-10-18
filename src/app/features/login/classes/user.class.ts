import { UserModel } from '../models/user.model';

export class User implements UserModel {
    constructor(
        public id = null,
        public firstName = '',
        public lastName = ''
    ) {}
}
