import React from 'react';
import './Home.scss';
import logo from '../../assets/Loop.png';
import { useNavigate, NavLink, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteUserInfo } from '../../React-Redux/action/userInfo/userInfo.action';
import { DeleteUserBookmark } from '../../React-Redux/action/BookMarkSearch/Bookmark.action';
import { DeleteUserSearch } from '../../React-Redux/action/DeleteSearch/deleteSearch.action';
// import { Bookmark } from '../Bookmark/Bookmark';
// import { AddSearch } from '../AddSearch/Addcard/Addcard';

export const HomePage = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const UserInfo = useSelector((state) => state.User)
    const {users} = UserInfo 

    // const userInfoLocal = JSON.parse(localStorage.getItem('userId'))
    // const {user } = userInfoLocal;

   const removeUser = () => {
        dispatch(DeleteUserInfo(users));
        dispatch(DeleteUserBookmark(users))
        dispatch(DeleteUserSearch(users))
        navigate('/signup')
        // localStorage.removeItem('userId')
    }

    return (
        <div className="homeMainContainer">
            <section className='section1'>
                <div>
                    <span className='image_Section1'><img src={logo}  alt=""/></span>
                    <nav className='navbar'>
                    <NavLink to='search'>Home</NavLink>
                    <NavLink to='bookmark'>Bookmark</NavLink>
                    </nav>
                   <span className='button_section1'> <button className='btn' onClick={removeUser} >Sign Out</button></span>
                </div>
            </section>
            <section className='mobile_nav'>
                <div className='mobile_nav_container'>

                    <nav className='navbar'>
                        <NavLink to='search'>Home</NavLink>
                        <NavLink to='bookmark'>Bookmark</NavLink>
                    </nav>
                   <span className='button_section1'> <button className='btn' onClick={removeUser} >Sign Out</button></span>

                </div>
            </section>
            <section className='section2'>
                
               <Outlet />
             
            </section>
        </div>
    )
}