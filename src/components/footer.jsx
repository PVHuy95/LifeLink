import { Link, useNavigate } from 'react-router-dom';
import React from 'react'
import '../css/Footer.css'
import LGSC from '../img/LGSC.png'
import logo2 from '../hinh/images.png'
import Backhome from '../components/Backhome'
import toast from 'react-hot-toast';

const Footer = () => {
    // Hàm xác nhận cuộc gọi
    const confirmCall = (phoneNumber) => {
        toast.custom(
            (t) => (
                <div
                    style={{
                        background: 'white',
                        padding: '20px',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        border: '2px solid #fbbf24',
                        maxWidth: '400px',
                    }}
                >
                    <div style={{ marginBottom: '15px', fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
                        📞 Confirm Phone Call
                    </div>
                    <div style={{ marginBottom: '20px', color: '#666' }}>
                        Bạn có muốn thực hiện cuộc gọi đến số <strong>+{phoneNumber}</strong> không?
                    </div>
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                        <button
                            onClick={() => {
                                toast.dismiss(t.id);
                            }}
                            style={{
                                padding: '8px 16px',
                                background: '#e5e7eb',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontWeight: '500',
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => {
                                window.location.href = `tel:${phoneNumber}`;
                                toast.dismiss(t.id);
                                toast.success('Initiating call...');
                            }}
                            style={{
                                padding: '8px 16px',
                                background: '#10b981',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontWeight: '500',
                            }}
                        >
                            Call Now
                        </button>
                    </div>
                </div>
            ),
            {
                duration: Infinity, // Không tự động tắt
                position: 'top-center',
            }
        );
    };
    return (
        <footer className="footer" >
            <div className="footer-container" >
                <div className="footer-logo" >
                    <div >
                        <img src={LGSC} />
                    </div>
                </div>
                <div className="footer-logo2">
                    <img src={logo2} alt="" style={{ paddingTop: "15%" }} />
                </div>
                <br />
                <div className="footer-about">
                    <h2>About Us</h2>
                    <p>
                        The LIFE LINK website specializes in providing ambulance calling
                        or rental services.
                    </p>
                    <Link to="/about">Learn more about us</Link>
                </div>

                <div className="footer-contact">
                    <h2>Contact Us</h2>
                    <p>
                        Address:
                        <a target='_blank' style={{ fontSize: '15px', textDecoration: 'none' }} href="https://maps.app.goo.gl/gqqGKUhNHX43FvVj6"> 21bis Hau Giang Street, <br />
                            Tan Son Nhat Ward, Tan Binh District, Ho Chi Minh City, VIETNAM</a>
                    </p>
                    <p>
                        Phone: <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                confirmCall(842873005654);
                            }}
                        >
                            (028).7300.5654
                        </a>
                    </p>
                    <p>
                        Email: <a href="mailto:aptech.fpt@fe.edu.vn">aptech.fpt@fe.edu.vn</a>
                    </p>
                </div>

            </div>

            <div className="footer-copyright">
                &copy; 2024 LifeLink. All rights reserved by SIGMA.
            </div>
            <Backhome />
        </footer>
    );
}

export default Footer;