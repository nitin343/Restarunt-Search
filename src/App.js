
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import ProtectedRoutes from './ProtectedRoutes';
import { SearchBar } from './view/AddSearch/Search/search';
import MultiSelect from './view/autocomplete/AutoComplete';
import { Bookmark } from './view/Bookmark/Bookmark';
import SignInForm from './view/Form/Form';
import { HomePage } from './view/Home/Home';
import NoPageFound from './view/NoPageFound/NoPageFound';

function App() {

  const UserInfo = useSelector((state) => state.User)
  const {users} = UserInfo 

  // console.log(users.id,'info');
  // useEffect(() => {
  //   let id  = users ? users.user.id : '';
  //   console.log(id,'id');
  // },[])

  return (
    <div>
      <Routes>
        {!users.id && (
          <>
        <Route path='signup' element={<SignInForm />} />
        <Route path='select' element={<MultiSelect />} />
        </>
        )}

        {users.id && (
          <>           
          <Route path='signup' element={<SignInForm />} />
            <Route path='/' element={<HomePage />} > 
              <Route index element={<SearchBar />} />
              <Route path='search' element={<SearchBar />} />
              <Route path='bookmark' element={<Bookmark />} />
              <Route path='select' element={<MultiSelect />} />
            </Route>
            {/* <Route path="*" element={<NoPageFound />} /> */}
          </>

        )}
        
        <Route path="*" element={users.id ? <NoPageFound /> : <Navigate to='/signup' />} />
       
        {/* <Route path='/bookmark' element={<Bookmark />} /> */}
     </Routes>
    </div>
  );
}

export default App;
