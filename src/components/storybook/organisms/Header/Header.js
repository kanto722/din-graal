import HeaderContent from '../../molecules/HeaderContent';
import './Header.scss';

function Header() {
    
    const data = [
        {link: 'Link', id: 1},
        {link: 'Link', id: 2},
        {link: 'Link', id: 3},
    ]

    return(
        <header className="header">
            <div className='layout'>
                <div className='container'>
                    <HeaderContent data={data}/>
                </div>
            </div>
        </header>
    );
}

export default Header;