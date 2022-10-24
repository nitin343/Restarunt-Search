export const UserReducer = (state = {users: []} , action) => {

    switch (action.type) {
        case "ADD_USER":
            return {users: action.payload};
        case "REMOVE_USER":
            return {users : []};
        default:
            return state; 
    }
}