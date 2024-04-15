import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UpdatePage() {
    const { id } = useParams();
    const [exercises, setExercises] = useState([]);
    const [exerciseInputs, setExerciseInputs] = useState([{ exercise: '', sets: '', reps: '' }]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchWorkoutPlan();
    }, []);

    const fetchWorkoutPlan = async () => {
        try {
            const response = await axios.get(`http://localhost:8070/workoutplan/get/${id}`);
            setExercises(response.data.exercises || []);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching workout plan:', error);
            setError('Error fetching workout plan. Please try again.');
            setLoading(false);
        }
    };

    const handleChange = (index, field, value) => {
        const updatedExercises = [...exercises];
        updatedExercises[index][field] = value;
        setExercises(updatedExercises);
    };

    const handleAddExercise = () => {
        setExerciseInputs([...exerciseInputs, { exercise: '', sets: '', reps: '' }]);
    };

    const handleDeleteExercise = (index) => {
        const updatedExercises = [...exercises];
        updatedExercises.splice(index, 1);
        setExercises(updatedExercises);
    };

    const handleSubmit = async () => {
        try {
            await axios.put(`http://localhost:8070/workoutplan/update/${id}`, { exercises });
            alert('Workout plan updated successfully');
        } catch (error) {
            console.error('Error updating workout plan:', error);
            alert('Error updating workout plan');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Update Workout Plan</h1>
            {exercises.map((exercise, index) => (
                <div key={index}>
                    <input
                        type="text"
                        value={exercise.exercise}
                        onChange={(e) => handleChange(index, 'exercise', e.target.value)}
                    />
                    <input
                        type="number"
                        value={exercise.sets}
                        onChange={(e) => handleChange(index, 'sets', e.target.value)}
                    />
                    <input
                        type="number"
                        value={exercise.reps}
                        onChange={(e) => handleChange(index, 'reps', e.target.value)}
                    />
                    <button onClick={() => handleDeleteExercise(index)}>Delete</button>
                </div>
            ))}
            {exerciseInputs.map((input, index) => (
                <div key={index}>
                    <input
                        type="text"
                        value={input.exercise}
                        onChange={(e) => setExerciseInputs([...exerciseInputs.slice(0, index), { ...input, exercise: e.target.value }, ...exerciseInputs.slice(index + 1)])}
                    />
                    <input
                        type="number"
                        value={input.sets}
                        onChange={(e) => setExerciseInputs([...exerciseInputs.slice(0, index), { ...input, sets: e.target.value }, ...exerciseInputs.slice(index + 1)])}
                    />
                    <input
                        type="number"
                        value={input.reps}
                        onChange={(e) => setExerciseInputs([...exerciseInputs.slice(0, index), { ...input, reps: e.target.value }, ...exerciseInputs.slice(index + 1)])}
                    />
                </div>
            ))}
            <button onClick={handleAddExercise}>Add Exercise</button>
            <button onClick={handleSubmit}>Update Workout Plan</button>
        </div>
    );
}

export default UpdatePage;
