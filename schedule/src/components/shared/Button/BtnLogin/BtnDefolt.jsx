import './btnLogin.css'

export default function BtnLogin({type, style, onClick, children}){
    return(
        <button 
        className="btnLogin"
        type={type}
        style={style}
        onClick={onClick}
        >{children}</button>
    )
}