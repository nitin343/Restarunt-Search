export const AddSearchReducer = (state = {searchs: []} , action) => {


    switch(action.type){
        case "ADD_SEARCH":
           return{searchs : action.payload}
        case "REMOVE_SEARCH":
            return {searchs: action.payload}
        case "SIGN_OUT":
             return {searchs: []}
        default:
            return state;
    }
}