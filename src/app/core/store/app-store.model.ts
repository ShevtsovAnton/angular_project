import { AuthStateModel } from '../../features/login/store/auth.state';

export interface AppState {
  readonly auth: AuthStateModel;
}
