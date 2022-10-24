import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MediaCard from './card/card';
import './AddCard.scss'

function AddCard() {

    const [gData, setGdata] = useState([])
    const [loading , setLoading] = useState(false);

    const UserInfo = useSelector((state) => state.User)
    const {users} = UserInfo 
    
    //  const userInfoLocal = JSON.parse(localStorage.getItem('userId'))
    //  const {user } = userInfoLocal;

    // console.log(userInfoLocal,'user');
    
    // let filteredSearch = {searchs: []};

    //     if(user){
    //         console.log('innn');
    //         let retriveSearch = JSON.parse(localStorage.getItem(`${users.id}search`))
    //             console.log(retriveSearch,'sigihi');
    //          if(retriveSearch !== [] && retriveSearch !== null && retriveSearch !== undefined) {
    //             retriveSearch.map((bookm) => {
    //                     bookm.search.map((id) => {
    //                         // filteredBookmark.push(searchs);
    //                         filteredSearch.searchs.push(id)
    //                     })
    //                 })
    //               }else{
    //                 filteredSearch = {searchs: []};
    //               }
    //         }

    
    // console.log(filteredSearch,'sigihi23');
    
    const AddSearch = useSelector((state) => state.Search);
    console.log(AddSearch , 'addsearch');
    const {searchs  } = AddSearch;
    // const {searchs  } = filteredSearch.length !== 0 ? filteredSearch : [];
    console.log(searchs , 'search');
 
    return(
        <>
        { loading ?  <span>Loading...</span>  : 
            searchs.map((data) => {
                
                return(
                    
                    <div className='searchedCard' ><MediaCard data={data}/></div>
                )
            })
        }
        </>
    )
     
}

export default AddCard;