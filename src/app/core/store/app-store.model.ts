import { AuthStateModel } from '../../features/login/store/auth.state';
import { CoursesStateModel } from 'src/app/features/courses/store/courses.state';

export interface AppState {
  readonly auth: AuthStateModel;
  readonly courses: CoursesStateModel;
}
