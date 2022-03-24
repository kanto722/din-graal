import './StyleContent/PromoContent.scss';
import CardProduct from '../atoms/card/CardProduct';

import ImgTwo from '../../../assets/images/date/png/7.png';
import Img from '../../../assets/images/date/png/1.png';

const PromoContent = ({data}) => {
    const items = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <CardProduct key={id} {...itemProps}/>

        )
    })
    return (
        <div className='promo-content'>
            <div className='promo-image'>
                <img src={ImgTwo}/>
                <img src={Img}/>
            </div>
            <div className='promo-content'>
                <h2>Текст слоган</h2>
            </div>
            <div className='content'>
                {items}
            </div>
        </div>
    )
}

export default PromoContent;