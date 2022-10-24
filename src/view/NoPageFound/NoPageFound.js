import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NotFound from '../../assets/NotFound.jpg';
import './NoPageFound.scss'

function NoPageFound(props) {
    const navigate = useNavigate();

    const userInfo = useSelector((state) => state.User)
    const {users} = userInfo;

    const Lost =() => {
       navigate('/search')
    }
    const login =() => {
       navigate('/signup')
    }

    return (
        <div>
            <div className='np_img'>
            <img src={NotFound} alt="" />
            </div>
            <div className='btn_div'>
            {
                users.id 
                ?
                <button className='bttn' onClick={Lost}>Home</button>
                :
                <button className='bttn' onClick={login}>Log IN</button>

            }
            </div>
        </div>
    );
}

export default NoPageFound;