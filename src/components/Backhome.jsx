import { Link } from 'react-router-dom';
import backhome from '../hinh/backhome.png';
import { useNavigate } from 'react-router-dom';
const Backhome = () => {
    const navigate = useNavigate();
    const bh = () => {
        navigate('/');
        window.scrollTo(0, 0);
    }
    return (
        <>
            <div >
                <img src={backhome} className='buttonbackhome' onClick={bh} />
            </div>
        </>
    );
}

export default Backhome;