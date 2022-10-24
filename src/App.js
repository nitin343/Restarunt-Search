
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { SearchBar } from './view/AddSearch/Search/search';
import { Bookmark } from './view/Bookmark/Bookmark';
import SignInForm from './view/Form/Form';
import { HomePage } from './view/Home/Home';

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
        <Route path='signup' element={<SignInForm />} />
        <Route path='/' element={<HomePage />} > 
          <Route index element={<SearchBar />} />
          <Route path='search' element={<SearchBar />} />
          <Route path='bookmark' element={<Bookmark />} />
        </Route>
        {/* <Route path='/bookmark' element={<Bookmark />} /> */}
     </Routes>
    </div>
  );
}

export default App;
