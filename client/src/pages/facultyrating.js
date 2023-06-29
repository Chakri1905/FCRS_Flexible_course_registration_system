import React, { useState } from 'react';
import ParticlesBg from 'particles-bg';
import Axios from 'axios';

const Facultyrating = () => {
  const [faculty_name, setFacultyName] = useState('');
  const [facultyid, setFacultyId] = useState('');
  const [rating, setRating] = useState('');
  const [ratingList, setRatingList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addRating = () => {
    Axios.post('http://localhost:3001/createrating', {
      faculty_name: faculty_name,
      facultyid: facultyid,
      rating: rating,
    })
      .then(() => {
        setRatingList([
          ...ratingList,
          {
            faculty_name: faculty_name,
            facultyid: facultyid,
            rating: rating,
          },
        ]);
      })
      .catch((error) => {
        console.error('Error adding rating', error);
      });
  };

  const getRatings = () => {
    Axios.get('http://localhost:3001/ratings')
      .then((response) => {
        setRatingList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching ratings', error);
      });
  };

  return (
    <div>
      <div>
        <ParticlesBg type="square" bg={true} />
        <form onSubmit={handleSubmit}>
          <label>
            Faculty Name:
            <input
              type="text"
              name="faculty_name"
              className="input-field"
              onChange={(e) => setFacultyName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Faculty ID:
            <input
              type="text"
              name="facultyid"
              className="input-field"
              onChange={(e) => setFacultyId(e.target.value)}
            />
          </label>
          <br />
          <label>
            Rating:
            <input
              type="number"
              name="rating"
              className="input-field"
              onChange={(e) => setRating(e.target.value)}
            />
          </label>
          <br />
          <button type="submit" onClick={addRating}>
            Add Rating
          </button>
        </form>
      </div>
      <div>
        <table className="faculty-table">
          <thead>
            <tr>
              <th>Faculty Name</th>
              <th>Faculty ID</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {ratingList.map((rating, index) => (
              <tr key={index}>
                <td>{rating.faculty_name}</td>
                <td>{rating.facultyid}</td>
                <td>{rating.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Facultyrating;
