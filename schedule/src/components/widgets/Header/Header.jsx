import './header.css'
import BtnHeader from "../../shared/Button/BtnHeader/BtnHeader";
import BtnLogin from "../../shared/Button/BtnLogin/BtnDefolt";


export function Header({onClickLog}){
    return(
        <header>
            <nav className="navHeader">
                <section className="navHeader__notAuthorized">
                    <BtnHeader>Расписание</BtnHeader>
                    <BtnHeader>Машины</BtnHeader>
                </section>
                <section className="navHeader__admin">
                    <BtnHeader>Создать запись</BtnHeader>
                    <BtnHeader>Редактировать запись</BtnHeader>
                    <BtnHeader>Создать машину</BtnHeader>
                </section>
                <BtnLogin onClick={onClickLog} style={{position: "absolute", top: '17.5%', right: "3%"}}>Войти</BtnLogin>
            </nav>
        </header>
    )
}