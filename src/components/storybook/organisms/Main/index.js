import PromoContent from '../../molecules/PromoContent';
import './Main.scss';

function Main() {
    return (
        <main className='main'>
            <div className='layout'>
                <div className='container'>
                    <PromoContent/>
                </div>
            </div>
        </main>
    )
}

export default Main;