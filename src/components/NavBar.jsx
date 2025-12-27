import '../css/NavBar.css'
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Dropdown from 'react-bootstrap/Dropdown';
import icon from '../img/icon.svg'
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useState, useEffect } from 'react';

const MyNav = () => {
     const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Hiện navbar khi cuộn lên hoặc ở đầu trang, ẩn khi cuộn xuống
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            // Kiểm tra xem đã cuộn khỏi đầu trang chưa để đổi màu nền
            if (currentScrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Tạo chuỗi class động
    const navbarClasses = `table-header ${isVisible ? 'navbar-visible' : 'navbar-hidden'} ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`;

    return (
        <>
            <table className={navbarClasses}>
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
                                <Link to='/search' className='btn-link' >Ambulance</Link>
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