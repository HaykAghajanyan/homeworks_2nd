import { SetMessages, changeTextColorOfMessage, changeNameColorOfMessage } from '../constants/ReduxActionTypes';
import { Synchronous, Asynchronous } from '../helpers/ReduxActionGenerator';
export const actionSetMessage = Asynchronous(SetMessages)
export const changeText = Synchronous(changeTextColorOfMessage)
export const changeName = Synchronous(changeNameColorOfMessage)