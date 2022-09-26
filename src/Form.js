import './Form.css'
import Button from './Button'
import {useState} from "react"
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

function Form() {
    const users = useSelector(state => state.users)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const backToUserList = useNavigate();
    const dispatch = useDispatch()
    
    function createUser(){
        return {
            id: users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1,
            first_name: firstName,
            last_name: lastName,
            avatar: ''
        }
    }    

    return <div className="form" >
        <label className='label'>Jméno</label>
        <input onChange={(event) => setFirstName(event.target.value)} value={firstName} placeholder='Jan' id='first_name'/>
        <label className='label'>Příjmení</label>
        <input onChange={(event) => setLastName(event.target.value)} placeholder='Novák'  value={lastName} id='last_name'/>
        <Button click={() => {dispatch({ type: 'ADD_USER', user: createUser() }); backToUserList(-1)}} text="Přidat" type="btnAdd"/>
        </div>
}

export default Form