import axios from 'axios';
import React,{useEffect, useState} from 'react';
import {Autocomplete , TextField , Button } from '@mui/material/';

import './Search.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AddSearch } from '../../../React-Redux/action/AddSearch/AddSearch.action';
import AddCard from '../Addcard/Addcard';

export function SearchBar() {

    const [restaurntData , setRestaurntData] = useState();
    const [searchedRestaurnt , setSearchedRestaurnt] = useState(null);
    const [selectedData , setSelectedData] = useState()

    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.User)
    const {users} = userInfo

    
    // const userInfo = JSON.parse(localStorage.getItem('userId'))
    // const {user } = userInfo;


    const search = useSelector((state) => state.Search)
    const {searchs} = search

    console.log(selectedData);

    useEffect( () => {
        //  axios.get(`https://api.airtable.com/v0/appjWdL7YgpxIxCKA/restaurants?filterByFormula={Name}="KFC"&view=Grid%20view`,{
        //     headers: {
        //         "Authorization": "Bearer keyfXgn8PL6pB3x32"
        //     } // cannot tuse these methode becuase in sirtable db all the restaurnt names are store unformal manner some are capital some are small so while search cannot send the correct query to airtable to fetch that paticular data 
        // }) 

           axios.get(`https://api.airtable.com/v0/appjWdL7YgpxIxCKA/restaurants?maxrecord='100'&view=Grid%20view`,{
            headers: {
                "Authorization": "Bearer keyfXgn8PL6pB3x32"
            }
        })
        .then(response => setRestaurntData(response.data))
        .catch(error => error)    
    },[])

    const AddCards = async data => {
       console.log(users.id,'id');
      

     await axios.get(`https://api.airtable.com/v0/appjWdL7YgpxIxCKA/restaurants?filterByFormula={Name}='${data}'&view=Grid%20view`,{
            headers: {
                "Authorization": "Bearer keyfXgn8PL6pB3x32"
            }
        })
        .then(response => {
            response.data.records.map((data) => {
              dispatch(AddSearch(data , searchs , users))
              return setSelectedData(data);
            })
        })
        .catch(error => error) 
        
        
    }

    console.log(restaurntData,'data');

    return (
    <main>
      <div className='SearchBar'>
       <Autocomplete
        
        id="size-small-standard-multi"
        size="small"
        className='autocomplete'
        options={restaurntData ? restaurntData.records.map((option) => option.fields.Name) : []}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Search Restaurnt"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }} 
          />
        )}
        value = {searchedRestaurnt}
        onChange={(event , newValue) => setSearchedRestaurnt(newValue)}
        />
        <Button className='buton' onClick={() => AddCards(searchedRestaurnt)} variant="contained">Add</Button>
        </div>
        <div className='AddCard'>
        <AddCard />
        </div>
    </main>
    );
}

