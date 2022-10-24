   export const DeleteSearch =  (search,userId) => (dispatch,getState) => {

    const {Search : {searchs} ,} = getState();

    // console.log(search , 'ssssssssss');


      // commeted Local Storage Use
    // let retriveSearch = JSON.parse(localStorage.getItem(`${userId.id}search`))
    // let filteredSearch = [];
    // let updateSearch = retriveSearch.map(   (bookm) => {
    //      bookm.search.filter( (id) => {
    //         if(id.id !== search.id){
    //             // console.log(id,'idiiiii');
    //             filteredSearch.push(id)
    //         }
    //     })
    // }  )
    
    // // console.log(filteredSearch,'filteredSearch');
    // localStorage.setItem( `${userId.id}search` , JSON.stringify([{'search':  filteredSearch.length !== 0 ? [...filteredSearch] : [] }]))


    dispatch({
        type: "REMOVE_SEARCH",
        payload: searchs.filter((val) => val.id !== search.id)
    })
   }

   export const DeleteUserSearch = (user) => (dispatch, getState) => {
    const {User: {users} , } =getState();
        dispatch({
            type: "SIGN_OUT",
        })
}