import LogoBtn from '../atoms/buttons/LogoBtn';
import NavLink from '../atoms/buttons/NavLink';

import Logo from '../../../assets/images/logo.png';
import './StyleContent/HeaderContent.scss';


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
                />
            </div>
            <div className="navigation">
                {items}
            </div>
        </div>
    )
}


export default HeaderContent;