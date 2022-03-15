import PromoContent from '../../molecules/PromoContent';
import './Main.scss';
import {data} from '../Mock/DataCard';

function Main() {
    return (
        <main className='main'>
            <div className='layout'>
                <div className='container'>
                    <PromoContent data={data}/>
                </div>
            </div>
        </main>
    )
}

export default Main;

