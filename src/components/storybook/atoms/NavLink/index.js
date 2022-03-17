import './index.scss';


const NavLink = ( props ) => {
    const { text } = props

    return (
        <a className='navigation__link' href="/#">{text}</a>
    )
}



export default NavLink;