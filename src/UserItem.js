import './UserItem.css'
import Button from './Button'
import { useDispatch } from 'react-redux'

function UserItem(props) {
    const {id, first_name, last_name, avatar} = props
    const dispatch = useDispatch()

    return <div className="wrapper" id={id}>
        <img className="avatar" alt={`avatar_${id}`} src={avatar === '' ? `https://eu.ui-avatars.com/api/?name=${first_name}+${last_name}&background=0D8ABC&color=fff` : avatar}/>
        <p className="userDetails name">{`${first_name} ${last_name}`}</p>
        <p className="buttonBar"><Button click={() => dispatch({ type: 'DELETE_USER', id: id })} text='Smazat' type='btnRemove'/></p>
        </div>
}

export default UserItem