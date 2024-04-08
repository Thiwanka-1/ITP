import React, { useState } from 'react';
import axios from 'axios';
import './AddWorkoutForm.css';

function AddWorkoutForm() {
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [exercises, setExercises] = useState([
    { exercise: '', sets: '', reps: '' },
    { exercise: '', sets: '', reps: '' },
    { exercise: '', sets: '', reps: '' }
  ]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleExerciseChange = (index, key, value) => {
    const newExercises = [...exercises];
    newExercises[index][key] = value;
    setExercises(newExercises);
  };

  const handleAddExercise = () => {
    setExercises([...exercises, { exercise: '', sets: '', reps: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8070/workoutplan/add', {
        Email: email,
        Gender: gender,
        exercises: exercises
      });
      alert(response.data); 
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage('Something went wrong. Please try again.');
      }
    }
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(inputEmail));
  };

  return (
    <div>
      <div className='container'>
        <h1 className='h1'>One Day Workout Plan</h1>
        {errorMessage && <div>{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <label className='label'>
            Email:
            <input className={`input3 ${isValidEmail ? '' : 'invalid'}`} type="text" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label className='label'>
            Gender:
            <select className='select' value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="option">option</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>
          <br /><br />
          <label className='label2'>
            Exercises:
            {exercises.map((exercise, index) => (
              <div className='label1' key={index}>
                <input className='input' type="text" value={exercise.exercise} onChange={(e) => handleExerciseChange(index, 'exercise', e.target.value)} placeholder="Exercise" />
                <input className='input1' type="number" value={exercise.sets} onChange={(e) => handleExerciseChange(index, 'sets', e.target.value)} placeholder="Sets" />
                <input className='input1' type="number" value={exercise.reps} onChange={(e) => handleExerciseChange(index, 'reps', e.target.value)} placeholder="Reps" />
              </div>
            ))}
            <br /><button className='button1' type="button" onClick={handleAddExercise}>Add Exercise</button>
          </label>
          <br />
          <button className='button2' type="submit">Add Workout Plan</button>
        </form>
      </div>
    </div>
  );
}

export default AddWorkoutForm;
