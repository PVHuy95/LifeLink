import '../css/NavBar.css'
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Dropdown from 'react-bootstrap/Dropdown';
import icon from '../img/icon.svg'
import DropdownButton from 'react-bootstrap/DropdownButton';


const MyNav = () => {
    return (
        <>
            <table className='table-header'>
                <tr>
                    <td className='header-logo' align='center'>
                        <Link to='/'>
                            <img src={logo} style={{ width: '150px', height: '150px' }} />
                        </Link>
                    </td>

                    <td className='header-desktop'>
                        <table>
                            <tr>
                                <td className='header-link'>
                                    <Link to='/' className='nav-link' >Home</Link>
                                </td>
                                <td className='header-link'>
                                    <Link to='/search' className='nav-link' >Ambulance</Link>
                                </td>
                                <td className='header-link'>
                                    <Link to='/gallery' className='nav-link' >Gallery</Link>
                                </td>
                                <td className='header-link'>
                                    <Link to='/about' className='nav-link' >About Us</Link>
                                </td>
                                <td className='header-link'>
                                    <Link to='/feedback' className='nav-link' >Feedback</Link>
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td className='header-mobile'>
                        <DropdownButton title={<img src={icon} />} >
                            <Dropdown.Item >
                                <Link to='/' className='btn-link' >Home</Link>
                            </Dropdown.Item>
                            <Dropdown.Item >
                                <Link to='/search' className='btn-link' >eAmbulance Type</Link>
                            </Dropdown.Item>
                            <Dropdown.Item >
                                <Link to='/gallery' className='btn-link' >Gallery</Link>
                            </Dropdown.Item>
                            <Dropdown.Item >
                                <Link to='/about' className='btn-link' >About Us</Link>
                            </Dropdown.Item>
                            <Dropdown.Item >
                                <Link to='/feedback' className='btn-link' >Feedback</Link>
                            </Dropdown.Item>
                        </DropdownButton>
                    </td>
                </tr>
            </table>
        </>
    );
}

export default MyNav;