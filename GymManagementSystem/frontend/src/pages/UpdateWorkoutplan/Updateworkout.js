import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TrainerWorkoutPlans({ email }) {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get(`http://localhost:8070/Threedayworkoutplan/trainer/${email}`);
        setWorkouts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching workouts:', error);
        setError('Error fetching workouts. Please try again.');
        setLoading(false);
      }
    };

    fetchWorkouts();

    // Cleanup function
    return () => {
      // No cleanup required
    };
  }, [email]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Workout Plans for Trainer with Email: {email}</h2>
      {workouts.length > 0 ? (
        <ul>
          {workouts.map(workout => (
            <li key={workout._id}>
              <div>Email: {workout.Email}</div>
              <div>Gender: {workout.Gender}</div>
              <div>Exercises:</div>
              <ul>
                {workout.exercises.map((exercise, index) => (
                  <li key={index}>
                    {exercise.exercise}, Sets: {exercise.sets}, Reps: {exercise.reps}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <div>No workouts found for this trainer.</div>
      )}
    </div>
  );
}

export default TrainerWorkoutPlans;
