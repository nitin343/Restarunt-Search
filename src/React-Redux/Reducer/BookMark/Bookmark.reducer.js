export const BookmarkReducer = (state = {bookmarks: []}, action) => {
    switch (action.type) {
        case "ADD_BOOKMARK":
            return {bookmarks: action.payload};
        case "REMOVE_BOOKMARK":
          return {bookmarks: action.payload} 
        case "SIGN_OUT":
            return {searchs: []} 
        default:
            return state;
    }
}
