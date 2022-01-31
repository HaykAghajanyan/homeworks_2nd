import { AddUser, LoginUser, LogoutUser } from '../constants/ReduxActionTypes';
import { Asynchronous } from '../helpers/ReduxActionGenerator';
export const SignUpUser = Asynchronous(AddUser)
export const SignInUser = Asynchronous(LoginUser)
export const ExistUser = Asynchronous(LogoutUser)