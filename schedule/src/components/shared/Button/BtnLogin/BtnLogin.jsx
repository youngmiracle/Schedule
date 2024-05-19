import './btnLogin.css'

export default function BtnLogin({type, style, onClick}){
    return(
        <button 
        className="btnLogin"
        type={type}
        style={style}
        onClick={onClick}
        >Войти</button>
    )
}