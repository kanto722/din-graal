import LogoBtn from '../../atoms/LogoButton';
import NavLink from '../../atoms/NavLink';

import Logo from '../../../../assets/images/logo.png';
import './index.scss';


const HeaderContent = ({data}) => {
    const items = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <NavLink key={id} {...itemProps}/>
        )
    })
    

    return (
        <div className='header-content'>
            <div className="logo">
                <LogoBtn 
                    text='Din Graal'
                    image={Logo}
                    alt="img"
                    link='/#'
                />
            </div>
            <div className="navigation">
                {items}
            </div>
        </div>
    )
}


export default HeaderContent;