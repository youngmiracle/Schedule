import './loginSection.css'
import BtnLogin from '../../shared/Button/BtnLogin/BtnLogin'
import passwordImg from '../../assets/images/login/passwordLock.png'
import profileImg from '../../assets/images/login/profile.png'

export default function LoginSection({classLoginForm, clickCloseFormLogin}){
    return(
        <article className={classLoginForm} >
            <div className="loginSection__titleBlock">
                <h2>Авторизация</h2>
                <div className="titleBlock__wand"></div>
            </div>
            <form action="" className="loginSection__loginForm">
                <div className="loginForm__login">
                    <img src={passwordImg} alt="иконка" className="loginForm__icon"/>
                    <input type="text" placeholder="Логин" className="loginForm__input"/>
                    <div className="loginForm__wand"></div>
                </div>
                <div className="loginForm__login">
                    <img src={profileImg} alt="иконка" className="loginForm__icon"/>
                    <input type="password" placeholder="Пароль" className="loginForm__input"/>
                    <div className="loginForm__wand"></div>
                </div>
                <section className="submitStay">
                    <input type="checkbox"/>
                    <p className="submitStay__text">Остаться в системе</p>
                </section>
                <BtnLogin type={"submit"} style={{
                    position: "relative",
                    height: "10%",
                    margin: "0 auto",
                    top: "0"
                }}/>
            </form>
            <button className='loginSection__closeBtn' onClick={clickCloseFormLogin}></button>
        </article>
    )
}