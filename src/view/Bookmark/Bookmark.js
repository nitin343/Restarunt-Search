import React from "react";
import { useSelector } from "react-redux";
import MediaCard from "../AddSearch/Addcard/card/card";
import './Bookmark.scss'


export const Bookmark = () => {


      
    // const userInfoLocal = JSON.parse(localStorage.getItem('userId'))
    // const {user } = userInfoLocal;
    
    // let filteredBookmark = {bookmarks: []};

    //     if(user){
    //         console.log('innn');
    //         let retriveBookmark = JSON.parse(localStorage.getItem(`${user.id}bookmark`))
    //             console.log(retriveBookmark,'sigihi');
    //          if(retriveBookmark !== [] && retriveBookmark !== null && retriveBookmark !== undefined ) {
    //             retriveBookmark.map((bookm) => {
    //                     bookm.bookmark.map((id) => {
    //                         // filteredBookmark.push(searchs);
    //                         filteredBookmark.bookmarks.push(id)
    //                     })
    //                 })
    //               }else{
    //                 filteredBookmark = {bookmarks: []};
    //               }
    //         }

    // const {searchs  } = filteredSearch.length !== 0 ? filteredSearch : [];
    // const {bookmarks} =  filteredBookmark.length !== 0 ? filteredBookmark : [];
            const BookMark =  useSelector((state) => state.BookMark)
            const {bookmarks} =  BookMark;

            
        
            console.log(bookmarks);

    return (
        <div className='AddCard'>

            {
                
                (bookmarks.length !== 0 && bookmarks[0] !== []  && bookmarks !== undefined)? 
                
                    bookmarks.map((data) => {
                        return(
                            <MediaCard className='searchedCard' data={data}/>
                        )
                    })
                
                : 
                
                <span className="no_bookmark"> No Bookmark Selected</span>
                
              
            }
       
           
        </div>
    )
}