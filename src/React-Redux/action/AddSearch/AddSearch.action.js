

export const AddSearch = (search,data,users) => (dispatch,getState) => {
 console.log(getState,'redux');

    const{ Search :{searchs} ,} = getState();

    // let localSearchRetrive = {Localsearchs:[]} ;
    // const {Localsearchs } = localSearchRetrive;

   
        // let filteredSearch = {searchs: []};

    //     if(users){
    //         console.log('innn');
    //         let retriveSearch = JSON.parse(localStorage.getItem(`${users.id}search`))
    //             console.log(retriveSearch,'sigihi');
    //          if(retriveSearch !== [] && retriveSearch !== null && retriveSearch !== undefined) {
    //             retriveSearch.map((bookm) => {
    //                     bookm.search.map((id) => {
    //                         // filteredBookmark.push(searchs);
    //                         localSearchRetrive.Localsearchs.push(id)
    //                     })
    //                 })
    //               }else{
    //                 searchs = getState();
    //               }
    //         }


    const hasSearched = searchs.find(i => i.search.id == search.id);

    // // let searchField = searchs ? searchs : localSearchRetrive ? localSearchRetrive : []
    // console.log(Localsearchs,'hjghfhy');

    if(!hasSearched && search !== ''){    
    
      // commeted Local Storage Use
    // localStorage.setItem( `${users.id}search` , JSON.stringify([{'search': [...searchs  , {id:search.id , search} ]}]))
 
  
        dispatch({
            type : 'ADD_SEARCH',
            payload: [...searchs , {id:search.id , search} ]
        })
    }
}