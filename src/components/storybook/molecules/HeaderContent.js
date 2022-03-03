import Logo from '../../../assets/images/logo.png';
import NavLink from '../atoms/buttons/NavLink';



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
                <a className='logo__fix' href="#">
                    <img src={Logo} width="65px"/>
                    <span>Din Graal</span>
                </a>
            </div>
            <div className="navigation">
                {items}
            </div>
        </div>
    )
}


export default HeaderContent;