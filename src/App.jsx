
import React from 'react';
import { RecurrenceProvider } from './context/RecurrenceContext';
import RecurringDatePicker from './components/RecurringDatePicker'; 
import './index.css';

function App() {
  return (
    <RecurrenceProvider>
      <div className="min-h-screen bg-gray-100 p-10">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-400"> Date Picker</h1>
        
 

        <RecurringDatePicker />
      </div>
    </RecurrenceProvider>
  );
}

export default App;
