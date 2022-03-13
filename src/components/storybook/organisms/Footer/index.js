import FooterContent from '../../molecules/FooterContent';
import './Footer.scss';

function Footer() {
    const data = [
        {text: 'Link', id: 1},
        {text: 'Link', id: 2},
        {text: 'Link', id: 3},
    ]
    return (
        <footer className='footer'>
            <div className='layout'>
                <div className='container'>
                    <FooterContent data={data}/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;