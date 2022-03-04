import './StyleContent/PromoContent.scss';
import Img from '../../../assets/images/date/1.JPG';

const PromoContent = () => {

    return (
        <div className='promo-content'>
            <div className='promo-image'>
                <img src={Img}/>
            </div>
            <div className='promo-content'>

            </div>
        </div>
    )
}

export default PromoContent;