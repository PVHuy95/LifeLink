import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import bookingdata from '../data/data3.json';

const BookingButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [price, setPrice] = useState('');

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleHospitalChange = (e) => {
    const hospital = e.target.value;
    setSelectedHospital(hospital);
    updatePrice(hospital, selectedService);
  };

  const handleServiceChange = (e) => {
    const service = e.target.value;
    setSelectedService(service);
    updatePrice(selectedHospital, service);
  };

  const updatePrice = (hospital, service) => {
    const hospitalData = bookingdata.find((item) => item.hospital === hospital);
    if (hospitalData && hospitalData.services[service]) {
      setPrice(hospitalData.services[service]);
    } else {
      setPrice('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedHospital || !selectedService) {
      alert('Please select both a hospital and a service.');
      return;
    }

    const bookingData = {
      hospital: selectedHospital,
      service: selectedService,
      price: price,
      pickupLocation: pickupLocation
    };

    const message = `
      Hospital: ${bookingData.hospital}
      Service: ${bookingData.service}
      Price: ${bookingData.price}
      Pickup Location: ${bookingData.pickupLocation}
    `;

    alert("Your request has been accepted! Thank you for using the service.\n" + message);
    handleClose();
  };

  return (
    <div style={{ paddingRight: "2%" }}>
      <button
        className="btn btn-warning"
        style={{ marginLeft: "10px" }}
        onClick={handleShow}
        type="button"
      >
        Booking
      </button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Hospital</Form.Label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleHospitalChange}
                required
                value={selectedHospital}
              >
                <option value="">Choose hospital</option>
                {bookingdata.map((booking) => (
                  <option key={booking.hospital} value={booking.hospital}>
                    {booking.hospital}
                  </option>
                ))}
              </select>
            </Form.Group>

            <Form.Group controlId="formContact" className="mt-3">
              <Form.Label>Ambulance Type</Form.Label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleServiceChange}
                required
                value={selectedService}
              >
                <option value="">Choose service</option>
                <option value="A/C">A/C</option>
                <option value="ICCU">ICCU</option>
                <option value="ICU">ICU</option>
                <option value="Non A/C">Non A/C</option>
                <option value="Normal">Normal</option>
              </select>
            </Form.Group>

            <Form.Group controlId="formAddress" className="mt-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                value={price}
                readOnly
                placeholder="Price will be displayed here"
              />
            </Form.Group>

            <Form.Group controlId="formPickupLocation" className="mt-3">
              <Form.Label>Pickup Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Location"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="warning" type="submit" className="mt-3">
              Booking
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BookingButton;
