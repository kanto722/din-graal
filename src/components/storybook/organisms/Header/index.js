import HeaderContent from '../../molecules/HeaderContent';
import './Header.scss';

function Header() {
    const data = [
        {text: 'Link', id: 1},
        {text: 'Link', id: 2},
        {text: 'Link', id: 3},
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