import React, { useState } from 'react';
import '../css/Feedback.css';
import MyNav from "./NavBar";
import Footer from '../components/footer';
import StarRating from './StarRating';

const Feedback = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comment: '',
        rating: 0
    });
    const [errors, setErrors] = useState({});
    const [feedbackList, setFeedbackList] = useState([
        { rating: 5, comment: "Excellent ambulance service!" },
        { rating: 4, comment: "Great experience, but arrived a bit late." },
        { rating: 3, comment: "Decent service, but could be improved." },
        { rating: 5, comment: "Very fast" },
        { rating: 4, comment: "Great!!!" }
    ]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleRatingChange = (rating) => {
        setFormData({ ...formData, rating });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name cannot be left empty!";
    if (!formData.email) newErrors.email = "Email cannot be left empty!";
    if (!formData.comment) newErrors.comment = "Feedback cannot be left empty!";
    if (!formData.rating) newErrors.rating = "Please provide a rating!";
    
    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
    }
    
    setErrors({});
    setFeedbackList([{ rating: formData.rating, comment: formData.comment }, ...feedbackList]);
    setFormData({ name: '', email: '', comment: '', rating: 0 });
    
    alert("Feedback has been sent, thank you.");
};

    return (
        <>
            <MyNav />
            <div className="bg">
                <div className='row'>
                    <div>
                        <h2 align='center' style={{ fontSize: "5vw" }}>Feedback and Rate</h2>
                    </div>
                    <div className='col-md-5'>
                        <form onSubmit={handleSubmit} className="feedback-container">
                            <div className="form-group">
                                <label>Name:</label>
                                <input
                                    className="form-control"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                />
                                {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                            </div>

                            <div className="form-group">
                                <label>Email:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                />
                                {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                            </div>

                            <div className="form-group">
                                <label>Feedback:</label>
                                <textarea
                                    id="comment"
                                    className="form-control"
                                    rows={5}
                                    value={formData.comment}
                                    onChange={handleChange}
                                    style={{ resize: 'both' }}
                                    placeholder="Enter your feedback"
                                />
                                {errors.comment && <div style={{ color: 'red' }}>{errors.comment}</div>}
                            </div>

                            <label>Rating:</label>
                            <StarRating initialRating={formData.rating} onRate={handleRatingChange} />
                            {errors.rating && <div style={{ color: 'red' }}>{errors.rating}</div>}
                            <br />

                            <button className="btn btn-success buttonsend">Send</button>
                        </form>
                    </div>

                    <div className='col-md-7' style={{ padding: "5%" }}>
                        <table className='table table-bordered rate' align='center'>
                            <thead>
                                <tr>
                                    <th className='user'>Rating</th>
                                    <th className='user'>Feedback</th>
                                </tr>
                            </thead>
                            <tbody>
                                {feedbackList.map((feedback, index) => (
                                    <tr key={index}>
                                        <td style={{ color: 'yellow' }} className='rating'>{'★'.repeat(feedback.rating)}</td>
                                        <td>{feedback.comment}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Feedback;
