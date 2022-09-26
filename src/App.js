import './App.css';
import Form from './Form';
import Menu from './Menu';
import UserList from './UserList';
import {Route, Routes} from 'react-router-dom';
import {useEffect} from "react";
import {useDispatch} from 'react-redux';

function App() {
  // const [users, setUsers] = useState([{
  //   id: "1",
  //   first_name: "Filip",
  //   last_name: "Dyrčík",
  //   avatar: ""
  // },{
  //   id: "2",
  //   first_name: "Lukáš",
  //   last_name: "Rubeš",
  //   avatar: ""
  // }])

  // function addUser(user){
  //   setUsers([...users, user])
  // }

  // function removeUser(id){
  //   setUsers(users.filter(user => user.id !== id))
  // }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'FETCH_USERS' })
    fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(data => {
              dispatch({type: 'FETCH_USERS_SUCCESS', data: data.data})
            })
            .catch(error => {
              dispatch({type: 'FETCH_USERS_SUCCESS', error: error})
            })
  }, [])

  return (
    <div>
      <Menu/>
      <Routes>
        <Route path='/' element={<UserList /*users={users} removeUser={removeUser}*//>}/>
        <Route path='/add' element={<Form /*users={users} /*addUser={addUser}*//>}/>
      </Routes>
    </div>
  );
}

export default App;