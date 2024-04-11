import React, { useState } from 'react';
import axios from 'axios';
import './AddMonthlyReport.css';
import { PDFViewer,Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const pdfStyles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 20
  },
  section: {
    marginBottom: 10
  },
  label: {
    fontWeight: 'bold'
  }
});

const AddMonthlyReport = () => {
  const [formData, setFormData] = useState({
    month: '',
    year: '',
    total_number_of_trainers: '',
    total_number_of_clients: '',
    new_clients_acquired: '',
    client_retention_rate: '',
    total_sessions_conducted: '',
    average_attendance_rate: '',
    trainer_performance: [],
    highlights: '',
    challenges: '',
    goals_for_next_month: '',
    revenue: '',
    additional_notes: '',
    conclusion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTrainerChange = (index, e) => {
    const { name, value } = e.target;
    const updatedTrainers = [...formData.trainer_performance];
    updatedTrainers[index][name] = value;
    setFormData({ ...formData, trainer_performance: updatedTrainers });
  };

  const addTrainer = () => {
    setFormData({
      ...formData,
      trainer_performance: [
        ...formData.trainer_performance,
        { trainer_name: '', number_of_clients: '', new_clients_acquired: '', sessions_conducted: '', average_attendance_rate: '' }
      ]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8070/Report/add', formData);
      alert('Monthly report added successfully!');
      // Optionally, reset the form after successful submission
      setFormData({
        month: '',
        year: '',
        total_number_of_trainers: '',
        total_number_of_clients: '',
        new_clients_acquired: '',
        client_retention_rate: '',
        total_sessions_conducted: '',
        average_attendance_rate: '',
        trainer_performance: [],
        highlights: '',
        challenges: '',
        goals_for_next_month: '',
        revenue: '',
        additional_notes: '',
        conclusion: ''
      });
    } catch (error) {
      console.error('Error adding monthly report:', error);
      alert('Failed to add monthly report. Please try again.');
    }
  };

  const monthOptions = [
    { value: '', label: 'Select Month' },
    { value: 'January', label: 'January' },
    { value: 'February', label: 'February' },
    { value: 'March', label: 'March' },
    { value: 'April', label: 'April' },
    { value: 'May', label: 'May' },
    { value: 'June', label: 'June' },
    { value: 'July', label: 'July' },
    { value: 'August', label: 'August' },
    { value: 'September', label: 'September' },
    { value: 'October', label: 'October' },
    { value: 'November', label: 'November' },
    { value: 'December', label: 'December' }
  ];

  // Options for years
  const yearOptions = Array.from({ length: 7 }, (_, i) => (
    <option key={i + 2024} value={i + 2024}>{i + 2024}</option>
  ));

  const YourPDFDocument = ({ formData }) => (
    <Document>
      <Page size="A4" style={pdfStyles.page}>
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.label}>Month: {formData.month}</Text>
          <Text style={pdfStyles.label}>Year: {formData.year}</Text>
          <Text style={pdfStyles.label}>Total Number of Trainers: {formData.total_number_of_trainers}</Text>
          <Text style={pdfStyles.label}>Total Number of Clients: {formData.total_number_of_clients}</Text>
          <Text style={pdfStyles.label}>New Clients Acquired: {formData.new_clients_acquired}</Text>
          <Text style={pdfStyles.label}>Client Retention Rate: {formData.client_retention_rate}</Text>
          <Text style={pdfStyles.label}>Total Sessions Conducted: {formData.total_sessions_conducted}</Text>
          <Text style={pdfStyles.label}>Average Attendance Rate: {formData.average_attendance_rate}</Text>
        </View>
  
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.label}>Trainer Performance</Text>
          {formData.trainer_performance.map((trainer, index) => (
            <View key={index}>
              <Text>{`Trainer Name: ${trainer.trainer_name}`}</Text>
              <Text>{`Number of Clients: ${trainer.number_of_clients}`}</Text>
              <Text>{`New Clients Acquired: ${trainer.new_clients_acquired}`}</Text>
              <Text>{`Sessions Conducted: ${trainer.sessions_conducted}`}</Text>
              <Text>{`Average Attendance Rate: ${trainer.average_attendance_rate}`}</Text>
            </View>
          ))}
        </View>
  
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.label}>Highlights: {formData.highlights}</Text>
          <Text style={pdfStyles.label}>Challenges: {formData.challenges}</Text>
          <Text style={pdfStyles.label}>Goals for Next Month: {formData.goals_for_next_month}</Text>
          <Text style={pdfStyles.label}>Revenue: {formData.revenue}</Text>
          <Text style={pdfStyles.label}>Additional Notes: {formData.additional_notes}</Text>
          <Text style={pdfStyles.label}>Conclusion: {formData.conclusion}</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="select-container">
      <h2>Add Monthly Report</h2>
      <form onSubmit={handleSubmit}>
        <label>Month:</label>
        <select name="month" value={formData.month} onChange={handleChange} required>
          {monthOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>

        <label className="select-container">Year:</label>
        <select name="year" value={formData.year} onChange={handleChange} required>
          <option value="">Select Year</option>
          {yearOptions}
        </select>

        <label>Total Number of Trainers:</label>
        <input type="number" name="total_number_of_trainers" value={formData.total_number_of_trainers} onChange={handleChange} required />
        
        <label>Total Number of Clients:</label>
        <input type="number" name="total_number_of_clients" value={formData.total_number_of_clients} onChange={handleChange} required />

        <label>New Clients Acquired:</label>
        <input type="number" name="new_clients_acquired" value={formData.new_clients_acquired} onChange={handleChange} required />

        <label>Client Retention Rate:</label>
        <input type="text" name="client_retention_rate" value={formData.client_retention_rate} onChange={handleChange} required />

        <label>Total Sessions Conducted:</label>
        <input type="number" name="total_sessions_conducted" value={formData.total_sessions_conducted} onChange={handleChange} required />

        <label>Average Attendance Rate:</label>
        <input type="text" name="average_attendance_rate" value={formData.average_attendance_rate} onChange={handleChange} required />
        
        <h3>Trainer Performance</h3>
        {formData.trainer_performance.map((trainer, index) => (
          <div key={index} className="select-container">
            <label>Trainer Name:</label>
            <input type="text" name="trainer_name" value={trainer.trainer_name} onChange={(e) => handleTrainerChange(index, e)} required />
            
            <label>Number of Clients:</label>
            <input type="number" name="number_of_clients" value={trainer.number_of_clients} onChange={(e) => handleTrainerChange(index, e)} required />

            <label>New Clients Acquired:</label>
            <input type="number" name="new_clients_acquired" value={trainer.new_clients_acquired} onChange={(e) => handleTrainerChange(index, e)} required />

            <label>Sessions Conducted:</label>
            <input type="number" name="sessions_conducted" value={trainer.sessions_conducted} onChange={(e) => handleTrainerChange(index, e)} required />

            <label>Average Attendance Rate:</label>
            <input type="text" name="average_attendance_rate" value={trainer.average_attendance_rate} onChange={(e) => handleTrainerChange(index, e)} required />
          </div>
        ))}
        <button type="button" onClick={addTrainer}>Add Trainer</button>
        
        <label>Highlights:</label>
        <textarea name="highlights" value={formData.highlights} onChange={handleChange} required />

        <label>Challenges:</label>
        <textarea name="challenges" value={formData.challenges} onChange={handleChange} required />

        <label>Goals for Next Month:</label>
        <textarea name="goals_for_next_month" value={formData.goals_for_next_month} onChange={handleChange} required />

        <label>Revenue:</label>
        <input type="number" name="revenue" value={formData.revenue} onChange={handleChange} required />

        <label>Additional Notes:</label>
        <textarea name="additional_notes" value={formData.additional_notes} onChange={handleChange} required />

        <label>Conclusion:</label>
        <textarea name="conclusion" value={formData.conclusion} onChange={handleChange} required />
        
        <button type="submit">Submit</button>
      </form>

      {/* PDF viewer */}
      <PDFViewer>
        <YourPDFDocument formData={formData} />
      </PDFViewer>

      {/* PDF download link */}
      <PDFDownloadLink document={<YourPDFDocument formData={formData} />} fileName="monthly_report.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Generating PDF...' : 'Download PDF'
        }
      </PDFDownloadLink>
    </div>
  );
};

export default AddMonthlyReport;
