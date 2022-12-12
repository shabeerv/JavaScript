import { actionTypes as imageActions } from "../../src/redux/actions/imageAction";
import {actionTypes as userActions } from "../../src/redux/actions/userAction"

const ActionTracker =  [imageActions.IMAGE, userActions.LOGIN];

export const loadingList = ActionTracker

export default ActionTracker;