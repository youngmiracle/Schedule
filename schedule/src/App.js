import { useState } from 'react';
import './App.css';
import {Header} from "./components/widgets/Header/Header";
import LoginSection from "./components/widgets/LoginSection/LoginSection";
import AddCar from './components/pages/adminPages/AddCar/AddCar';

function App() {
  const [classLogin, setClassLogin] = useState('loginSectionNone')
  return (
    <>
      <Header onClickLog={() => setClassLogin('loginSection')}/>
        <main>
          <AddCar/>
          <LoginSection classLoginForm={classLogin} clickCloseFormLogin={() => setClassLogin("loginSectionNone")}/>
        </main>
    </>
  );
}

export default App;
