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

    // Function to generate PDF document
    const generatePDF = () => {
        return (
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text style={styles.heading}>Workout Plan</Text>
                        {exercises.map((exercise, index) => (
                            <View key={index} style={styles.section}>
                                <Text>{`${exercise.exercise}, Sets: ${exercise.sets}, Reps: ${exercise.reps}`}</Text>
                            </View>
                        ))}
                    </View>
                </Page>
            </Document>
        );
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Update Workout Plan</h1>
            {exercises.map((exercise, index) => (
                <div key={index} style={styles.exerciseContainer}>
                    <input
                        type="text"
                        value={exercise.exercise}
                        onChange={(e) => handleChange(index, 'exercise', e.target.value)}
                        style={styles.input}
                    />
                    <input
                        type="number"
                        value={exercise.sets}
                        onChange={(e) => handleChange(index, 'sets', e.target.value)}
                        style={styles.input}
                    />
                    <input
                        type="number"
                        value={exercise.reps}
                        onChange={(e) => handleChange(index, 'reps', e.target.value)}
                        style={styles.input}
                    />
                    <button onClick={() => handleDeleteExercise(index)} style={styles.button}>Delete</button>
                </div>
            ))}
            {exerciseInputs.map((input, index) => (
                <div key={index} style={styles.exerciseContainer}>
                    <input
                        type="text"
                        value={input.exercise}
                        onChange={(e) => setExerciseInputs([...exerciseInputs.slice(0, index), { ...input, exercise: e.target.value }, ...exerciseInputs.slice(index + 1)])}
                        style={styles.input}
                    />
                    <input
                        type="number"
                        value={input.sets}
                        onChange={(e) => setExerciseInputs([...exerciseInputs.slice(0, index), { ...input, sets: e.target.value }, ...exerciseInputs.slice(index + 1)])}
                        style={styles.input}
                    />
                    <input
                        type="number"
                        value={input.reps}
                        onChange={(e) => setExerciseInputs([...exerciseInputs.slice(0, index), { ...input, reps: e.target.value }, ...exerciseInputs.slice(index + 1)])}
                        style={styles.input}
                    />
                </div>
            ))}
            <button onClick={handleAddExercise} style={styles.button}>Add Exercise</button>
            <button onClick={handleSubmit} style={styles.button}>Update Workout Plan</button>
            <PDFDownloadLink document={generatePDF()} fileName="workout_plan.pdf">
                {({ blob, url, loading, error }) => (loading ? 'Generating PDF...' : <button style={styles.button}>Download PDF</button>)}
            </PDFDownloadLink>
        </div>
    );
}

export default UpdatePage;
