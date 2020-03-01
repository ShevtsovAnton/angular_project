import { UserModel } from '../models/user.model';

export interface AuthStateModel {
  user: UserModel;
  isAuthenticated: boolean;
}

export const initialAuthState: AuthStateModel = {
  user: {
    id: 0,
    fakeToken: '',
    name: {
      first: '',
      last: ''
    },
    login: 'Anonymous',
    password: ''
  },
  isAuthenticated: false
};
