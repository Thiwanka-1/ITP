import React, { useState } from 'react';
import axios from 'axios';
import './AddWorkoutForm.css';

function Threedayworkoutplanform(){
  const [Email, setCustomerID] = useState('');
  const [Gender, setGender] = useState('');
  const [exercises1, setExercises1] = useState([
    { exercise: '', sets: '', reps: '' },
    { exercise: '', sets: '', reps: '' },
    { exercise: '', sets: '', reps: '' }
]); 
const [exercises2, setExercises2] = useState([
  { exercise: '', sets: '', reps: '' },
  { exercise: '', sets: '', reps: '' },
  { exercise: '', sets: '', reps: '' }
]); 
const [exercises3, setExercises3] = useState([
    { exercise: '', sets: '', reps: '' },
    { exercise: '', sets: '', reps: '' },
    { exercise: '', sets: '', reps: '' }
  ]); 

const [errorMessage, setErrorMessage] = useState('');

const handleExerciseChange = (index, key, value,day) => {
  if (day === 1) {
    const newExercises1 = [...exercises1];
    newExercises1[index][key] = value;
    setExercises1(newExercises1);
  } else if (day === 2) {
    const newExercises2 = [...exercises2];
    newExercises2[index][key] = value;
    setExercises2(newExercises2);
  }else if (day === 3) {
    const newExercises3 = [...exercises3];
    newExercises3[index][key] = value;
    setExercises3(newExercises3);
  }
};

const handleAddExercise = (day) => {
  if (day === 1) {
    setExercises1([...exercises1, { exercise: '', sets: '', reps: '' }]);
  } else if (day === 2) {
    setExercises2([...exercises2, { exercise: '', sets: '', reps: '' }]);
  }else if (day === 3) {
    setExercises3([...exercises3, { exercise: '', sets: '', reps: '' }]);
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:8070/Threedayworkoutplan/add', {
      Email,
      Gender,
      exercises1,
      exercises2,
      exercises3
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




  return(

    <div >
    <div className='container' >
    <div >
    <h1 className='h1'>Three Days Workout Plan</h1>
      {errorMessage && <div>{errorMessage}</div>}
      <form >
        <label className='label'>
        Email:
          <input  className='input3' type="text" value={Email} onChange={(e) => setCustomerID(e.target.value)} />
        </label>
        <br />
        <label className='label'>
          Gender:
          <select className='select' value={Gender} onChange={(e) => setGender(e.target.value)}>
          <option value="option">option</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            
          </select>
        </label>
        <br /><br />
        <label className='label2'>
        
          One Day
          {exercises1.map((exercise, index) => (
            <div className='label1' key={index} >
              <input className='input'
                type="text"
                value={exercise.exercise}
                onChange={(e) => handleExerciseChange(index, 'exercise', e.target.value,1)}
                placeholder="Exercise"
              />
              <input className='input1'
                type="number"
                value={exercise.sets}
                onChange={(e) => handleExerciseChange(index, 'sets', e.target.value,1)}
                placeholder="Sets"
              />
              <input className='input1'
                type="number"
                value={exercise.reps}
                onChange={(e) => handleExerciseChange(index, 'reps', e.target.value,1)}
                placeholder="Reps"
              />
            </div>
          ))}
          <br /> <button className='button1' type="button" onClick={() => handleAddExercise(1)}>Add Exercise</button>
        </label>
        
      </form>
      </div>
      </div>
      <div className='container'>
      <form >
      <div >
      <label className='label2'>
        
        Second Day
        {exercises2.map((exercise, index) => (
          <div className='label1' key={index} >
            <input className='input'
              type="text"
              value={exercise.exercise}
              onChange={(e) => handleExerciseChange(index, 'exercise', e.target.value,2)}
              placeholder="Exercise"
            />
            <input className='input1'
              type="number"
              value={exercise.sets}
              onChange={(e) => handleExerciseChange(index, 'sets', e.target.value,2)}
              placeholder="Sets"
            />
            <input className='input1'
              type="number"
              value={exercise.reps}
              onChange={(e) => handleExerciseChange(index, 'reps', e.target.value,2)}
              placeholder="Reps"
            />
            
          </div>
        ))}
        <br /> <button className='button1' type="button" onClick={() => handleAddExercise(2)}>Add Exercise</button>
        <br /><br />
        
      </label>
      
      </div>
      </form>
      </div>
      <div className='container'>
      <form onSubmit={handleSubmit}>
      <div >
      <label className='label2'>
        
        Three Day
        {exercises3.map((exercise, index) => (
          <div className='label1' key={index} >
            <input className='input'
              type="text"
              value={exercise.exercise}
              onChange={(e) => handleExerciseChange(index, 'exercise', e.target.value,3)}
              placeholder="Exercise"
            />
            <input className='input1'
              type="number"
              value={exercise.sets}
              onChange={(e) => handleExerciseChange(index, 'sets', e.target.value,3)}
              placeholder="Sets"
            />
            <input className='input1'
              type="number"
              value={exercise.reps}
              onChange={(e) => handleExerciseChange(index, 'reps', e.target.value,3)}
              placeholder="Reps"
            />
            
          </div>
        ))}
        <br /> <button className='button1' type="button" onClick={() => handleAddExercise(3)}>Add Exercise</button>
        <br /><br />
        
      </label>
      <br />
        <button className='button2' type="submit">Add Workout Plan</button>
      </div>
      </form>
      </div>
    </div>
    
  );

}
export default  Threedayworkoutplanform;