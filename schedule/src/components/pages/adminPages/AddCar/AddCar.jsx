import downloadIco from '../../../assets/images/supportIcon/download.png'
import BtnDefault from '../../../shared/Button/BtnLogin/BtnDefolt'
import './addCar.css'

export default function AddCar(){
    return(
        <article className="AddCarForm">
            <h2>Добавить автомобиль</h2>
            <section className='AddCarForm__content'>
                <div className="AddPhoto">
                    <h3>Добавить фото</h3>
                    <img src={downloadIco} alt="иконка загрузки" className='AddPhoto__img'/>
                    <input type="file" className='AddPhoto__addFile'/>
                </div>
                <form className='AddCarForm__form'>
                    <input type="text" placeholder='Марка машины: ' className='AddCarForm__input'/>
                    <input type="text" placeholder='Модель машины: ' className='AddCarForm__input'/>
                    <input type="text" placeholder='Коробка передач: ' className='AddCarForm__input'/>
                    <input type="text" placeholder='Номер машины: ' className='AddCarForm__input'/>
                    <input type="text" placeholder='Цвет машины: ' className='AddCarForm__input'/>
                    <BtnDefault>Сохранить</BtnDefault>
                </form>
            </section>
        </article>
    )
}