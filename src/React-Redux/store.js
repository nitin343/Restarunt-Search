import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { AddSearchReducer } from "./Reducer/AddSearch/AddSearch.reducer";
import { BookmarkReducer } from "./Reducer/BookMark/Bookmark.reducer";
import { UserReducer } from "./Reducer/userInfo/user.reducer";


const reducer = combineReducers({
    Search: AddSearchReducer,
    BookMark: BookmarkReducer,
    User: UserReducer
})

const initialState = {}

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;