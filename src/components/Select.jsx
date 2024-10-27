import React from "react";
import { useState } from "react";
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
    name: "NhietDoit Hospital",
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

function HospitalTable() {
  const [selectedHospital, setSelectedHospital] = useState("1");

  const handleHospitalChange = (event) => {
    setSelectedHospital(event.target.value);
  };

  const hospitalOptions = hospitalData.map((hospital) => ({
    value: hospital.id,
    label: hospital.name,
  }));

  return (
    <div className="container mt-5">
      <MyCustomSelect
        options={hospitalOptions}
        defaultValue={selectedHospital}
        onChange={handleHospitalChange}
      />

      {selectedHospital && (
        <div className="text-center mt-7">
          <img
            src={hospitalData.find((h) => h.id === selectedHospital).src}
            className="img-fluid rounded"
            alt={`${hospitalData.find((h) => h.id === selectedHospital).name} Hospital`}
          />
        </div>
      )}
    </div>
  );
}

export default HospitalTable;
