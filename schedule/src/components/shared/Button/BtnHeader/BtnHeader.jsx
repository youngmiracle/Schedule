import './btnHeader.css'

export default function BtnHeader({children}){
    return(
        <button className="btnHeader"
        type="submit">{children}</button>
    )
}