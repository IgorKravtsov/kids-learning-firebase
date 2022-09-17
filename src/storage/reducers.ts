import { combineReducers } from "redux";
import { userReducer } from "storage/slices/userSlice";
import { snackbarReducer } from "storage/slices/snackbarSlice";

const reducer = combineReducers({
  user: userReducer,
  snackbar: snackbarReducer,
});

export default reducer;
