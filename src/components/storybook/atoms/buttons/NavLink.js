
const NavLink = ( props ) => {
    const { link } = props

    return (
        <a className='navigation__link' href="#">{link}</a>
    )
}



export default NavLink;