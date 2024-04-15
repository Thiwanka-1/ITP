import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '20px',
    },
    heading: {
        fontSize: '24px',
        marginBottom: '20px',
    },
    exerciseContainer: {
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        marginRight: '10px',
        padding: '5px',
        fontSize: '16px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginLeft: '10px',
    },
});

function UpdatePage() {
    const { id } = useParams();
    const [workout, setWorkout] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchWorkoutPlan();
    }, []);

    const fetchWorkoutPlan = async () => {
        try {
            const response = await axios.get(`http://localhost:8070/workoutplan/get/${id}`);
            setWorkout(response.data || null);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching workout plan:', error);
            setError('Error fetching workout plan. Please try again.');
            setLoading(false);
        }
    };

    const handleChange = (arrayIndex, exerciseIndex, field, value) => {
        const updatedWorkout = { ...workout };
        updatedWorkout[`exercises${arrayIndex + 1}`][exerciseIndex][field] = value;
        setWorkout(updatedWorkout);
    };

    const handleAddExercise = (arrayIndex) => {
        const updatedWorkout = { ...workout };
        updatedWorkout[`exercises${arrayIndex + 1}`].push({ exercise: '', sets: '', reps: '' });
        setWorkout(updatedWorkout);
    };

    const handleDeleteExercise = (arrayIndex, exerciseIndex) => {
        const updatedWorkout = { ...workout };
        updatedWorkout[`exercises${arrayIndex + 1}`].splice(exerciseIndex, 1);
        setWorkout(updatedWorkout);
    };

    const handleSubmit = async () => {
        try {
            await axios.put(`http://localhost:8070/workoutplan/update/${id}`, workout);
            alert('Workout plan updated successfully');
        } catch (error) {
            console.error('Error updating workout plan:', error);
            alert('Error updating workout plan');
        }
    };

    // Function to generate PDF document
    const generatePDF = () => {
        // PDF generation logic
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Update Workout Plan</h1>
            {workout && workout.exercises1 && (
                <>
                    <h2 style={styles.heading}>One-Day Workout Plan</h2>
                    {workout.exercises1.map((exercise, exerciseIndex) => (
                        <div key={exerciseIndex} style={styles.exerciseContainer}>
                            <input
                                type="text"
                                value={exercise.exercise}
                                onChange={(e) => handleChange(0, exerciseIndex, 'exercise', e.target.value)}
                                style={styles.input}
                            />
                            <input
                                type="number"
                                value={exercise.sets}
                                onChange={(e) => handleChange(0, exerciseIndex, 'sets', e.target.value)}
                                style={styles.input}
                            />
                            <input
                                type="number"
                                value={exercise.reps}
                                onChange={(e) => handleChange(0, exerciseIndex, 'reps', e.target.value)}
                                style={styles.input}
                            />
                            <button onClick={() => handleDeleteExercise(0, exerciseIndex)} style={styles.button}>Delete</button>
                        </div>
                    ))}
                    <button onClick={() => handleAddExercise(0)} style={styles.button}>Add Exercise</button>
                </>
            )}
            {workout && workout.exercises2 && (
                <>
                    <h2 style={styles.heading}>Two-Day Workout Plan</h2>
                    {workout.exercises2.map((exercise, exerciseIndex) => (
                        <div key={exerciseIndex} style={styles.exerciseContainer}>
                            <input
                                type="text"
                                value={exercise.exercise}
                                onChange={(e) => handleChange(1, exerciseIndex, 'exercise', e.target.value)}
                                style={styles.input}
                            />
                            <input
                                type="number"
                                value={exercise.sets}
                                onChange={(e) => handleChange(1, exerciseIndex, 'sets', e.target.value)}
                                style={styles.input}
                            />
                            <input
                                type="number"
                                value={exercise.reps}
                                onChange={(e) => handleChange(1, exerciseIndex, 'reps', e.target.value)}
                                style={styles.input}
                            />
                            <button onClick={() => handleDeleteExercise(1, exerciseIndex)} style={styles.button}>Delete</button>
                        </div>
                    ))}
                    <button onClick={() => handleAddExercise(1)} style={styles.button}>Add Exercise</button>
                </>
            )}
            <button onClick={handleSubmit} style={styles.button}>Update Workout Plan</button>
            <PDFDownloadLink document={generatePDF()} fileName="workout_plan.pdf">
                {({ blob, url, loading, error }) => (loading ? 'Generating PDF...' : <button style={styles.button}>Download PDF</button>)}
            </PDFDownloadLink>
        </div>
    );
}

export default UpdatePage;
