import "./Button.css"

function Button(props) {
    const {text, type, click} = props

    return <button onClick={click} className={`button ${type}`}>{text}</button>
}

export default Button