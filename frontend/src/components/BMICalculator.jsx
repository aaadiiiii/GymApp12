import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Import CSS file for custom styling

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBmi = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
      let bmiMessage = '';
      if (bmiValue < 18.5) {
        bmiMessage = 'Underweight';
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        bmiMessage = 'Normal Weight';
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        bmiMessage = 'Overweight';
      } else {
        bmiMessage = 'Obesity';
      }
      setMessage(bmiMessage);
      toast.info(`Your BMI is ${bmiValue.toFixed(2)} - ${bmiMessage}`, {
        className: 'blue-toast',
      });
    } else {
      toast.error('Please enter valid height and weight', {
        className: 'blue-toast',
      });
    }
  };

  return (
    <section className='bmi'>
      <h1>BMI Calculator</h1>
      <div className="container">
      <div className="wrapper">
      <form onSubmit={calculateBmi}>
        <div>
          <label>
            Height (cm):
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Weight (kg):
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Gender:
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>
        <button type="submit">Calculate BMI</button>
      </form>
      {bmi && (
        <div>
          <h2 className='bmii'>Your BMI: {bmi}</h2>
          <h3 className='bmii'>{message}</h3>
        </div>
      )}
      <ToastContainer />
      </div>
      
      <div className="wrapper">
          <img src="/bmi.jpg" alt="bmiImage" />
        </div>
        </div>
    </section>
  );
};

export default BMICalculator;
