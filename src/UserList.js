import UserItem from './UserItem'
import './UserList.css'
import {useSelector} from 'react-redux'
import {useEffect} from "react";

function UserList() {
    const users = useSelector(state => state.users)
    const loading = useSelector(state => state.loading)
    const error = useSelector(state => state.error)

    useEffect(() => {
        const elem = document.getElementById('spinner')
        loading ? elem.style.display = "block" : elem.style.display = "none" 
    }, [loading])

    useEffect(() => {
        const elem = document.getElementById('error')
        error ? elem.style.display = "block" : elem.style.display = "none" 
    }, [error])
    

    return <div>
        <div id='spinner' className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        <div id='error'>Error while loading data!<br/>{error}</div>
        {users.map(user => <UserItem key={user.id} id={user.id} first_name={user.first_name} last_name={user.last_name} avatar={user.avatar} /*removeUser={removeUser}*//>)}
    </div>
}

export default UserList