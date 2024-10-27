import React from "react";
import "../css/backgroundstyle.css";
import Footer from "./footer.jsx";
import Slide from "../components/Carousel.jsx"
import h1 from '../img1/xethuong1.png';
import h2 from '../img1/xethuong2.png';
import h3 from '../img1/xethuong3.png';
import h4 from '../img1/xethuong4.png';
import h5 from '../img1/xethuong5.png';
import h6 from '../img1/xethuong6.png';
import h7 from '../img1/xethuong7.png';
import h8 from '../img1/xethuong8.png';
import h9 from '../img1/xethuong9.png';
import h10 from '../img1/xethuong10.png';
import h11 from '../img1/xethuong11.png';
import h12 from '../img1/xethuong12.png';
import h13 from '../img1/xethuong13.png';
import h14 from '../img1/xethuong14.png';
import h15 from '../img1/xethuong15.png';
import h16 from '../img1/xethuong16.png';
import h17 from '../img1/xethuong17.png';
import h18 from '../img1/xethuong18.png';
import h19 from '../img1/xethuong19.png';
import h20 from '../img1/xethuong20.png';
import h21 from '../img1/xethuong21.png';
import MyNav from "./NavBar";
import '../css/Gallery.css';
import newsearch from '../img1/newsearch.png'
const Gallery = () => {
    return (
        <>
            <div>
                <MyNav />
            </div>
            <div align="center">
                <div >
                    <Slide />
                </div>
                <h1 align='center'>Our Gallery</h1>
                <div id="picture" style={{ textAlign: 'center' }}>
                    <br />
                    <div className="row">
                        <h2>Model Normal</h2>
                        <div className="col-md-4 mt-2 p-2" align='center'><img src={h6} className="imgvan" /></div>
                        <div className="col-md-4 mt-2 p-2" align='center'><img src={h2} className="imgvan" /></div>
                        <div className="col-md-4 mt-2 p-2" align='center'><img src={h8} className="imgvan" /></div>
                    </div>
                    <br /><br />
                    <div align='center'>
                    <hr style={{width:"70%"}}/>
                    </div>
                    <div className="row">
                    <h2>Model ICU</h2>
                        <div className="col-md-4 mt-2 p-2" align='center'><img src={h7} className="imgvan" /></div>
                        <div className="col-md-4 mt-2 p-2" align='center'><img src={h5} className="imgvan" /></div>
                        <div className="col-md-4 mt-2 p-2" align='center'><img src={h1} className="imgvan" /></div>
                    </div>
                    <br /><br />
                    <div align='center'>
                    <hr style={{width:"70%"}}/>
                    </div>
                    <div className="row">
                    <h2>Model AC</h2>
                        <div className="col-md-4 mt-2 p-2" align='center'><img src={h4} className="imgvan" /></div>
                        <div className="col-md-4 mt-2 p-2" align='center'><img src={h3} className="imgvan" /></div>
                        <div className="col-md-4 mt-2 p-2" align='center'><img src={h9} className="imgvan" /></div>
                    </div>
                    <br /><br />
                    <div align='center'>
                    <hr style={{width:"70%"}}/>
                    </div>
                    <div className="row">
                    <h2>Model non AC</h2>
                        <div className="col-md-4 mt-2 p-2" align='center'><img src={h10} className="imgvan" /></div>
                        <div className="col-md-4 mt-2 p-2" align='center'><img src={h11} className="imgvan" /></div>
                        <div className="col-md-4 mt-2 p-2" align='center'><img src={h12} className="imgvan" /></div>
                    </div>
                    <br /><br />
                    <div align='center'>
                    <hr style={{width:"70%"}}/>
                    </div>
                    <div className="row">
                    <h2>Model ICCU</h2>
                        <div className="col-md-4 mt-2 p-2" align='center'><img src={h13} className="imgvan" /></div>
                        <div className="col-md-4 mt-2 p-2" align='center'><img src={h14} className="imgvan" /></div>
                        <div className="col-md-4 mt-2 p-2" align='center'><img src={h15} className="imgvan" /></div>
                    </div>
                    <br /><br />
                    <div align='center'>
                    <hr style={{width:"70%"}}/>
                    </div>
                    <div className="row">
                    <h2>Model Medium Size</h2>
                        <div className="col-md-4 mt-2 p-2" align='center'><img src={h16} className="imgvan" /></div>
                        <div className="col-md-4 mt-2 p-2" align='center'><img src={h17} className="imgvan" /></div>
                        <div className="col-md-4 mt-2 p-2" align='center'><img src={h18} className="imgvan" /></div>
                    </div>
                    <br /><br />
                    <div align='center'>
                    <hr style={{width:"70%"}}/>
                    </div>
                    <div className="row">
                    <h2>Model Large Size</h2>
                        <div className="col-md-4 mt-2 p-2" align='center'><img src={h19} className="imgvan" /></div>
                        <div className="col-md-4 mt-2 p-2" align='center'><img src={h20} className="imgvan" /></div>
                        <div className="col-md-4 mt-2 p-2" align='center'><img src={h21} className="imgvan" /></div>
                    </div>
                    <br />
                </div>
            </div>
            <div>
                <div class="box-hover">
                    <img src={newsearch} alt="atention" width={400} />
                    <div href={h2} class="nut1" target="_top">
                        Images are taken from sources on the internet.
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Gallery;