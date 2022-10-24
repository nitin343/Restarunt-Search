import * as React from 'react';
import Card from '@mui/material/Card';
import './card.scss'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FullScreenDialog from '../../FullScreenMap/fullscreen';
import { useDispatch, useSelector } from 'react-redux';
import AlertDialog from '../../ConfirmDialog/confirmDialog';
import { AddBookmark, RemoveBookMark } from '../../../../React-Redux/action/BookMarkSearch/Bookmark.action';


export default function MediaCard(props) {
    console.log(props.data ,' props');

    const [bIcob , setBIcon] = React.useState(false);

    const dispatch = useDispatch();

    
    
    const UserInfo = useSelector((state) => state.User)
    const {users} = UserInfo 
    
    
    
       // commeted Local Storage Use
    // const userInfo = JSON.parse(localStorage.getItem('userId'))
    // const {user } = userInfo;
    // console.log(user,'user');
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
     
    // const {bookmarks} = (BookMark.bookmarks.length !== 0  && BookMark.bookmarks.length !== undefined)? BookMark : (filteredBookmark.bookmarks.length !== 0 && filteredBookmark.bookmarks.length !== undefined) ? filteredBookmark : [];

            const BookMark =  useSelector((state) => state.BookMark)
            const {bookmarks } = BookMark
            // console.log(bookmarks);


    console.log(props.data.search,'propsss');
    
    const {id: id , fields: {Name}} = props.data.search ;
    console.log(id ,'id' , Name ,'field');

    if(Name) {
       var embsrc=`https://datastudio.google.com/embed/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params={"ds2.name2":"${Name}"}`
    };

    React.useEffect(() => {
        if(bookmarks){
       bookmarks.map((bookmark) => {
          if(id == bookmark.id){
            setBIcon(true);
          }
       })
    }
    },[bIcob , props])

 
    const bookmarkMap = (bms) => {
        console.log(bms);
        dispatch(AddBookmark(bms , users))
        setBIcon(true)
    }

    const removeBookmarkmap = (bms) => {
        dispatch(RemoveBookMark(bms , users))
        setBIcon(false);
    }
  

  return (
    <Card  className='card_width'>
      <CardContent>
        <div className='card_cardContent'>
          <span className='card_text'>
         {Name}
        </span>
        <span className='card_icon'>
            <span> <FullScreenDialog open={Name} src={embsrc}/></span>
            <span>
                {bIcob ? 
                    <BookmarkIcon  onClick={() => {removeBookmarkmap(props.data)} } className="pointer" /> 
                        :
                    <BookmarkBorderOutlinedIcon onClick={() => {bookmarkMap(props.data)} } className="pointer" />
                }
                </span>
            <span> <AlertDialog   data={props.data} /></span>
         </span>
         </div>
       
      </CardContent>
      <CardMedia >
      <iframe className='dstudio' src={embsrc} frameborder="0"  allowfullscreen></iframe>
      </CardMedia>
    </Card>
  );
}
