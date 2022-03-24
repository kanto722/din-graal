import HeaderContent from '../../molecules/HeaderContent';
import './Header.scss';
import {data} from '../Mock/DataHeader';
function Header() {


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