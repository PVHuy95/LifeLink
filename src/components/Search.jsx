import React, { useState } from "react";
import Ambulance from "../data/data.json";
import MyNav from "./NavBar";
import "../css/Home.css";
import "../css/Search.css";
import Footer from "./footer";
import Dropdown from "react-bootstrap/Dropdown";

import h1 from "../hinh/img222.jpg";
import h2 from "../hinh/img2.png";
import h3 from "../hinh/img3.png";
import h4 from "../hinh/img4.png";
import h5 from "../hinh/img555.png";
import h6 from "../hinh/img444.png";
import h7 from "../hinh/img77.png";
import h8 from "../hinh/img8.png";
import h9 from "../hinh/img9.png";
import h10 from "../hinh/img333.png";
import MyCustomSelect from "./MyCustomSelect";

import hpt1 from "../hos-img/choray.png";
import hpt2 from "../hos-img/nhidong.png";
import hpt3 from "../hos-img/tudu.png";
import hpt4 from "../hos-img/vietphap.png";
import hpt5 from "../hos-img/bachmai.png";
import hpt6 from "../hos-img/nhietdoi.png";
import hpt7 from "../hos-img/quany7a.png";
import hpt8 from "../hos-img/saint-paul.png";
import hpt9 from "../hos-img/vinmec.png";
import hpt10 from "../hos-img/ungbuu.png";
import BookingButton from '../components/Booking'
const imagesData = [
  {
    src: h1,
    id: "1",
    type: "ICU",
    price: "1000",
    location: "1",
    distance: "9",
    alt: "ICU Service",
    size: "large",
  },
  {
    src: h2,
    id: "2",
    type: "ICU",
    price: "900",
    location: "2",
    distance: "4",
    alt: "ICU Service",
    size: "large",
  },
  {
    src: h3,
    id: "3",
    type: "ICCU",
    price: "800",
    location: "1",
    distance: "2",
    alt: "ICCU Service",
    size: "Medium",
  },
  {
    src: h4,
    id: "4",
    type: "ICCU",
    price: "900",
    location: "4",
    distance: "9",
    alt: "ICCU Service",
    size: "Medium",
  },
  {
    src: h5,
    id: "5",
    type: "A/C",
    price: "700",
    location: "5",
    distance: "3",
    alt: "A/C Service",
    size: "Medium",
  },
  {
    src: h6,
    id: "6",
    type: "A/C",
    price: "600",
    location: "3",
    distance: "8",
    alt: "A/C Service",
    size: "Medium",
  },
  {
    src: h7,
    id: "7",
    type: "Normal",
    price: "500",
    location: "3",
    distance: "4",
    alt: "Normal Service",
    size: "Large",
  },
  {
    src: h8,
    id: "8",
    type: "Normal",
    price: "600",
    location: "4",
    distance: "7",
    alt: "Normal Service",
    size: "Large",
  },
  {
    src: h9,
    id: "9",
    type: "Non A/C",
    price: "500",
    location: "3",
    distance: "5",
    alt: "Non A/C Service",
    size: "Large",
  },
  {
    src: h10,
    id: "10",
    type: "Non A/C",
    price: "400",
    location: "5",
    distance: "6",
    alt: "Non A/C Service",
    size: "Large",
  },
];
const hospitalData = [
  {
    src: hpt1,
    id: "1",
    name: "ChoRay Hospital",
    location: "1",
    distance: "9",
  },
  {
    src: hpt2,
    id: "2",
    name: "NhiDong Hospital",
    location: "1",
    distance: "9",
  },
  {
    src: hpt3,
    id: "3",
    name: "TuDu Hospital",
    location: "1",
    distance: "9",
  },
  {
    src: hpt4,
    id: "4",
    name: "VietPhap Hospital",
    location: "1",
    distance: "9",
  },
  {
    src: hpt5,
    id: "5",
    name: "BachMai Hospital",
    location: "1",
    distance: "9",
  },
  {
    src: hpt6,
    id: "6",
    name: "NhietDoi Hospital",
    location: "1",
    distance: "9",
  },
  {
    src: hpt7,
    id: "7",
    name: "QuanY7A Hospital",
    location: "1",
    distance: "9",
  },
  {
    src: hpt8,
    id: "8",
    name: "SaintPaul Hospital",
    location: "1",
    distance: "9",
  },
  {
    src: hpt9,
    id: "9",
    name: "Vinmec Hospital",
    location: "1",
    distance: "9",
  },
  {
    src: hpt10,
    id: "10",
    name: "UngBuu Hospital",
    location: "1",
    distance: "9",
  },
];

const Search = ({ data = Ambulance }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mainSortBy, setMainSortBy] = useState("type");
  const [secondarySortBy, setSecondarySort] = useState("asc");
  const [showHospitalData, setShowHospitalData] = useState(false);

  const filteredData = data.filter((service) => {
    const searchTextLower = searchTerm.toLowerCase();
    return (
      service.type.toLowerCase().includes(searchTextLower) ||
      service.price.toString().includes(searchTextLower) ||
      service.distance.toLowerCase().includes(searchTextLower) ||
      service.location.toLowerCase().includes(searchTextLower) ||
      service.size.toLowerCase().includes(searchTextLower)
    );
  });

  const sortedData = filteredData.sort((a, b) => {
    // Primary sorting based on mainSortBy
    const primarySortResult =
      mainSortBy === "type"
        ? a.type.localeCompare(b.type)
        : mainSortBy === "price"
          ? a.price - b.price
          : mainSortBy === "location"
            ? a.location.localeCompare(b.location)
            : mainSortBy === "size"
              ? a.size.localeCompare(b.size)
              : mainSortBy === "distance"
                ? a.distance.localeCompare(b.distance)
                : 0;
    // Apply secondary sorting if applicable (considering main sort first)
    const secondarySortResult =
      secondarySortBy === "asc" ? primarySortResult : -primarySortResult;

    return secondarySortResult;
  });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (newSortBy) => {
    setMainSortBy(newSortBy);
  };
  const [selectedHospital, setSelectedHospital] = useState("1");
  const handleHospitalChange = (event) => {
    setSelectedHospital(event.target.value);
  };
  const hospitalOptions = hospitalData.map((hospital) => ({
    value: hospital.id,
    label: hospital.name,
  }));
  return (
    <>
      <div className="bg bg-content">
        <MyNav />
        <div align="center">
          <div align="center" className="style">
            <h2 align='center' className="title_Hung"> Ambulance Type </h2>
          </div>
          <div style={{ marginLeft: "45px" }} align="left">
            <input
              type="text"
              value={searchTerm}
              placeholder="Search Type/Price/Size"
              onChange={handleSearch}
              className="search"
            />
          </div>
        </div>
        <div
          className="option"
          style={{
            marginLeft: "45px",
            width: "fit-content",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="sortDropdown">
              Sort by {mainSortBy} <span className="caret"></span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleSortChange("type")}>
                Sort by Type
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSortChange("price")}>
                Sort by Price
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSortChange("location")}>
                Sort by Location
              </Dropdown.Item>

              <Dropdown.Item onClick={() => handleSortChange("size")}>
                Sort by Size
              </Dropdown.Item>

              <Dropdown.Item onClick={() => handleSortChange("distance")}>
                Sort by Distance
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div style={{ paddingRight: "2%" }}>
            <BookingButton/>
          </div>
          
        </div>


        <div className="container">
          <div className="row">
            <div className="col-md-5 p-3">
            <div className="hos-table">
            <MyCustomSelect
              options={hospitalOptions}
              defaultValue={selectedHospital}
              onChange={handleHospitalChange}
            />
          </div>
          <br />
              <div >
                {selectedHospital && (
                  <img
                    src={hospitalData.find((h) => h.id === selectedHospital).src}
                    className="hos-img"
                    alt={`${hospitalData.find((h) => h.id === selectedHospital).name
                      } Hospital`}
                  />
                )}
              </div>
             
            </div>
            <div className="col-md-7 p-3">
              <div >
                <div >
                  <table className="table table-striped table-bordered table-hover">
                    <tr>
                      <th>Type</th>
                      <th>Price</th>
                      <th>Location</th>
                      <th>Size</th>
                      <th>Images</th>
                    </tr>
                    {sortedData.map((service, index) => (
                      <tr key={index}>
                        <td>{service.type}</td>
                        <td>{`${service.price}$`}</td>
                        <td>District {service.location}</td>
                        <td>{service.size}</td>
                        <td key={index}>
                          {imagesData
                            .filter((image) => image.id === service.id)
                            .map((image) => (
                              <img
                                className="img img-fluid img-thumbnail"
                                key={image.id}
                                src={image.src}
                                alt={image.alt}
                              />
                            ))}
                        </td>
                      </tr>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Search;

