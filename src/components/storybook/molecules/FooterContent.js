import NavLink from '../atoms/buttons/NavLink';


const FooterContent = ({ data }) => {
    const items = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <NavLink key={id} {...itemProps}/>
        )
    })
    return (
        <div className='footer-content'>
            {items}
        </div>
    )
}

export default FooterContent;