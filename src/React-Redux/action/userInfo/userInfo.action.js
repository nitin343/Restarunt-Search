export const UserInfo = (user) => (dispatch, getState) => {
    const {User : {users} ,} = getState();
    console.log(user.id,'id');


      // commeted Local Storage Use
    // localStorage.setItem( 'userId' , JSON.stringify({user}))

    dispatch({
        type: "ADD_USER",
        payload: {id:user.id ,user}
    })
}

export const DeleteUserInfo = (user) => (dispatch, getState) => {
    const {User: {users} , } =getState();
        dispatch({
            type: "REMOVE_USER",
        })
}