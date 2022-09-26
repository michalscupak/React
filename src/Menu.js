import "./Menu.css"
import Button from "./Button"
import { Link } from "react-router-dom"

function Menu() {
    return <div className='menu'>
        <Link to='/'><Button text='Seznam uživatelů' type='btnMenu'/></Link>
        <Link to='/add'><Button text='Přidat uživatele' type='btnMenu'/></Link>
    </div>
}

export default Menu