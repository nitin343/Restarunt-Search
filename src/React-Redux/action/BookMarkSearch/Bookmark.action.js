   export const AddBookmark =  (bookmark , userId) => (dispatch , getState) => {

    const {BookMark: {bookmarks} ,} = getState();
    const hasSearched = bookmarks.find(i => i.search.id == bookmark.id);
   
     if(!hasSearched && bookmark !== ''){
     let search = bookmark.search;   

     if(search){

      // commeted Local Storage Use
    // localStorage.setItem( `${userId.id}bookmark` , JSON.stringify([{'bookmark':  [...bookmarks , {id: bookmark.id , search } ]}]))

        dispatch({
            type : 'ADD_BOOKMARK',
            payload: [...bookmarks , {id: bookmark.id , search } ]
        })
    }
    }
   }

   export const RemoveBookMark = (bookmark , userId) => (dispatch,getState) => {

    const {BookMark : {bookmarks} ,} = getState();

      // commeted Local Storage Use
        
    // let retriveBookmark = JSON.parse(localStorage.getItem(`${userId.id}bookmark`))
    // let filteredBookmark = []
    // let updateBookmark = retriveBookmark.map((bookm) => {
    //     bookm.bookmark.filter((id) => {
    //         if(id.id !== bookmark.id){
    //             filteredBookmark = id;
    //         }
    //     })
    // }  )
    // console.log(updateBookmark,'bookmarremove');
    // localStorage.setItem( `${userId.id}bookmark` , JSON.stringify([{'bookmark':  filteredBookmark.length !== 0 ? [filteredBookmark] : []}]))


    dispatch({
        type: "REMOVE_BOOKMARK",
        payload: bookmarks.filter((val) => val.id !== bookmark.id)
    })
   }


   export const DeleteUserBookmark = (user) => (dispatch, getState) => {
    const {User: {users} , } =getState();
        dispatch({
            type: "SIGN_OUT",
        })
}